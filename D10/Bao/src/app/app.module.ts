import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';


@NgModule
  ({
    declarations: [
      AppComponent,
      NavBarComponent
    ],

    imports:
      [
        BrowserModule,
        AppRoutingModule,

        AngularFireModule,
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],

    providers: [],
    bootstrap: [AppComponent]
  })

export class AppModule { }