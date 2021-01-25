import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddshopComponent } from './addshop.component';

const routes: Routes = [{ path: '', component: AddshopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddshopRoutingModule { }
