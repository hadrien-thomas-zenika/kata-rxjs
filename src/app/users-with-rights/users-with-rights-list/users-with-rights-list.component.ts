import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-with-rights-list',
  templateUrl: './users-with-rights-list.component.html',
  styleUrls: ['./users-with-rights-list.component.scss']
})
export class UsersWithRightsListComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      search: ['']
    });
  }

}
