import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ShowComponent } from './show.component';
import { IphoneComponent } from './components/iphone/iphone.component';
import { IphoneListComponent } from './components/iphone-list/iphone-list.component';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [ShowComponent, IphoneComponent, IphoneListComponent, CounterComponent],
  imports: [
    CommonModule,
    ShowRoutingModule
  ]
})
export class ShowModule { }
