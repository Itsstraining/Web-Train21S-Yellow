import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ItemComponent } from './components/item/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';


@NgModule({
  declarations: [CartComponent, ItemComponent, ItemListComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
