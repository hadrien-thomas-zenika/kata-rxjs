import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightsListComponent } from './rights-list/rights-list.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RightsListComponent
  ],
  exports: [
    RightsListComponent
  ],
})
export class RightsModule { }
