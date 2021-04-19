import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { RightsModule } from './rights/rights.module';
import { UsersWithRightsModule } from './users-with-rights/users-with-rights.module';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    UsersModule,
    RightsModule,
    UsersWithRightsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
