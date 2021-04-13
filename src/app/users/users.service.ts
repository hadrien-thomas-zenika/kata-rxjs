import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { UsersRepository } from './users.repository';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users$ = new BehaviorSubject<User[]>([]);

  constructor(private usersRepository: UsersRepository) {
  }

  getUsers(): Observable<User[]> {
    return this.usersRepository.getUsers();
  }

  fetchUsers(): void {
    this.usersRepository.getUsers().subscribe((users: User[]) => {
      this.users$.next(users);
    });
  }

  getUsers2(): Observable<User[]> {
    return this.users$.asObservable();
  }

  createUser(name: string): void {
    const newUser: User = {
      id: (Math.floor(Math.random() * 10000) + 1).toString(),
      name
    };
    const users = this.users$.getValue();
    users.push(newUser);
    this.users$.next(users);
  }
}
