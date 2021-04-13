import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { UserWithRights } from '../user-with-rights';
import { UsersWithRightsService } from '../users-with-rights.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-users-with-rights-list',
  templateUrl: './users-with-rights-list.component.html',
  styleUrls: ['./users-with-rights-list.component.scss']
})
export class UsersWithRightsListComponent implements OnInit {

  usersWithRights$: Observable<UserWithRights[]>;
  formGroup: FormGroup;

  constructor(
    private usersWithRightsService: UsersWithRightsService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      search: ['']
    });

    this.usersWithRights$ = combineLatest([
      this.usersWithRightsService.getUsersWithRights5(),
      this.formGroup.controls.search.valueChanges.pipe(startWith(''))
    ])
    .pipe(
      map(([usersWithRights, search]: [UserWithRights[], any]): UserWithRights[] => {
        return usersWithRights.filter((userWithRights: UserWithRights) => {
          return JSON.stringify(userWithRights).indexOf(search.toString()) >= 0;
        });
      })
    );


  }

}
