import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { UsersRepository } from './users.repository';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private usersRepository: UsersRepository) { }

  getUsers(): Observable<User[]> {
    return this.usersRepository.getUsers();
  }
}
