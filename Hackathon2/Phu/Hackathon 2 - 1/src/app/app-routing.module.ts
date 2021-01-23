import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Home', loadChildren: () => import('./Pages/home/home.module').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./Pages/intro/intro.module').then(m => m.IntroModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
