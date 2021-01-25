import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ItemComponent } from './Components/item/item.component';
import { ListitemComponent } from './Components/listitem/listitem.component';


@NgModule({
  declarations: [CartComponent, ItemComponent, ListitemComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
