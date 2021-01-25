import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddshopRoutingModule } from './addshop-routing.module';
import { AddshopComponent } from './addshop.component';


@NgModule({
  declarations: [AddshopComponent],
  imports: [
    CommonModule,
    AddshopRoutingModule
  ]
})
export class AddshopModule { }
