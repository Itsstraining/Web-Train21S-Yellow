import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { CounterComponent } from './counter/counter.component';
import { AddcartComponent } from './addcart/addcart.component';


@NgModule({
  declarations: [ShopComponent, ItemComponent, ItemListComponent, CounterComponent, AddcartComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
