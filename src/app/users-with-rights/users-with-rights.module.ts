import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersWithRightsListComponent } from './users-with-rights-list/users-with-rights-list.component';



@NgModule({
    declarations: [UsersWithRightsListComponent],
    exports: [
        UsersWithRightsListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UsersWithRightsModule { }
