import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersRepository {

  private users: User[] = [
    {
      id: 'user1',
      name: 'john'
    },
    {
      id: 'user2',
      name: 'ursula'
    },
    {
      id: 'user3',
      name: 'tim'
    },
    {
      id: 'user4',
      name: 'margareth'
    },
  ];

  constructor() {
  }

  public getUsers(): Observable<User[]> {
    return of(this.users).pipe(
      delay(2000)
    );
  }

  public getUser(id: string): Observable<User> {
    const userToFind: User = this.users.find((user: User) => user.id === id);
    return of(userToFind).pipe(
      delay(1000 + Math.random() * 3000)
    );
  }

  public createUser(name: string): void {
    this.users.push({
      id: `id-${name}`,
      name
    });
  }
}
