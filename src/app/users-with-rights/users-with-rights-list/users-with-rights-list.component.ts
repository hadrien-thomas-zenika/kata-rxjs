import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserWithRights } from '../user-with-rights';
import { UsersWithRightsService } from '../users-with-rights.service';

@Component({
  selector: 'app-users-with-rights-list',
  templateUrl: './users-with-rights-list.component.html',
  styleUrls: ['./users-with-rights-list.component.scss']
})
export class UsersWithRightsListComponent implements OnInit {

  private usersWithRights$: Observable<UserWithRights[]>;

  constructor(private usersWithRightsService: UsersWithRightsService) { }

  ngOnInit(): void {
    this.usersWithRights$ = this.usersWithRightsService.getUsersWithRights4();
  }

}
