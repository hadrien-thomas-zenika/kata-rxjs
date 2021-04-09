import { Injectable } from '@angular/core';
import { Right } from './right';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RightsRepository{

  private rights: Right[] = [
    {
      id: 1,
      userId: 'user1',
      name: 'edit'
    },
    {
      id: 2,
      userId: 'user1',
      name: 'create'
    },
    {
      id: 3,
      userId: 'user2',
      name: 'edit'
    },
    {
      id: 4,
      userId: 'user3',
      name: 'create'
    },
    {
      id: 5,
      userId: 'user3',
      name: 'edit'
    },
    {
      id: 6,
      userId: 'user3',
      name: 'delete'
    },
  ];

  constructor() { }

  public getRights(): Observable<Right[]> {
    return of(this.rights).pipe(
      delay(1000)
    );
  }

  public getRightsForUser(userId: string): Observable<Right[]> {
    const userRights: Right[] = this.rights.filter((right: Right) => right.userId === userId);
    return of(userRights).pipe(
      delay(1000 + Math.random() * 3000)
    );
  }
}
