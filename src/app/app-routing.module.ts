import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { RightsListComponent } from './rights/rights-list/rights-list.component';
import { UsersWithRightsListComponent } from './users-with-rights/users-with-rights-list/users-with-rights-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'rights',
    component: RightsListComponent
  },
  {
    path: 'users-with-rights',
    component: UsersWithRightsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
