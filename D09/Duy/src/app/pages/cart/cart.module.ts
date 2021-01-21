import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ItemComponent } from './item/item.component';
import { ListItemComponent } from './list-item/list-item.component';


@NgModule({
  declarations: [CartComponent, ItemComponent, ListItemComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
