import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'Show', loadChildren: () => import('./pages/show/show.module').then(m => m.ShowModule) }, { path: 'Cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
