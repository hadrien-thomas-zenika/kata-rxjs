import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$: Observable<User[]>;
  formGroup: FormGroup;

  constructor(private userService: UsersService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers2();

    this.userService.fetchUsers();

    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  createUser(): void {
    if (!this.formGroup.valid) {
      return;
    }

    this.userService.createUser(this.formGroup.controls.name.value);
  }
}
