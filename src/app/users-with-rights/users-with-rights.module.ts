import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersWithRightsListComponent } from './users-with-rights-list/users-with-rights-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [UsersWithRightsListComponent],
    exports: [
        UsersWithRightsListComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UsersWithRightsModule { }
