import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'shop', loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule) }, { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) }, { path: 'addshop', loadChildren: () => import('./pages/addshop/addshop.module').then(m => m.AddshopModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
