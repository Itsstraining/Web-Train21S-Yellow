import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ItemComponent } from './components/Item/item.component';
import { ItemListComponent } from './components/item-list/item-list.component';


@NgModule({
  declarations: [ShopComponent, ItemComponent, ItemListComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule {}