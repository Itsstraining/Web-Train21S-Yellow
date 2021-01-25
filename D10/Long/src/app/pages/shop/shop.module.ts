import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ItemComponent } from './Components/item/item.component';
import { ListitemComponent
} from './Components/listitem/listitem.component'


@NgModule({
  declarations: [ShopComponent, ItemComponent,ListitemComponent],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
