import { Injectable } from '@angular/core';
import { UsersService } from '../users/users.service';
import { RightsService } from '../rights/rights.service';
import { from, Observable } from 'rxjs';
import { UserWithRights } from './user-with-rights';
import { concatMap, map, mergeMap, scan, switchMap, toArray } from 'rxjs/operators';
import { User } from '../users/user';
import { Right } from '../rights/right';

@Injectable({
  providedIn: 'root'
})
export class UsersWithRightsService {

  constructor(
    private usersService: UsersService,
    private rightsService: RightsService
  ) {
  }

  getUsersWithRights(): Observable<UserWithRights[]> {
    return this.usersService.getUsers2().pipe(
      mergeMap((users: User[]) => {
        return from(users);
      }),
      mergeMap((user: User) => {
        return this.rightsService.getRightsForUser(user.id).pipe(
          map((rights: Right[]) => {
            return {
              user,
              rights
            };
          })
        );
      }),
      toArray()
    );
  }

  getUsersWithRights2(): Observable<UserWithRights[]> {
    return this.usersService.getUsers2().pipe(
      switchMap((users: User[]) => {
        return from(users).pipe(
          mergeMap((user: User) => {
            return this.rightsService.getRightsForUser(user.id).pipe(
              map((rights: Right[]) => {
                return {
                  user,
                  rights
                };
              })
            );
          }),
          toArray()
        );
      })
    );
  }

  getUsersWithRights3(): Observable<UserWithRights[]> {
    return this.usersService.getUsers2().pipe(
      mergeMap((users: User[]) => {
        return from(users);
      }),
      mergeMap((user: User) => {
        return this.rightsService.getRightsForUser(user.id).pipe(
          map((rights: Right[]) => {
            return {
              user,
              rights
            };
          })
        );
      }),
      scan((usersWithRights: UserWithRights[], userWithRights: UserWithRights) => {
          usersWithRights.push(userWithRights);
          return usersWithRights;
        },
        []
      )
    );
  }

  getUsersWithRights4(): Observable<UserWithRights[]> {
    return this.usersService.getUsers2().pipe(
      mergeMap((users: User[]) => {
        return from(users);
      }),
      concatMap((user: User) => {
        return this.rightsService.getRightsForUser(user.id).pipe(
          map((rights: Right[]) => {
            return {
              user,
              rights
            };
          })
        );
      }),
      scan((usersWithRights: UserWithRights[], userWithRights: UserWithRights) => {
          usersWithRights.push(userWithRights);
          return usersWithRights;
        },
        []
      )
    );
  }

  getUsersWithRights5(): Observable<UserWithRights[]> {
    return this.usersService.getUsers2().pipe(
      switchMap((users: User[]) => {
        return from(users).pipe(
          concatMap((user: User) => {
            return this.rightsService.getRightsForUser(user.id).pipe(
              map((rights: Right[]) => {
                return {
                  user,
                  rights
                };
              })
            );
          }),
          scan((usersWithRights: UserWithRights[], userWithRights: UserWithRights) => {
              usersWithRights.push(userWithRights);
              return usersWithRights;
            },
            []
          )
        );
      })
    );
  }
}
