import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }

  user: any
  ngOnInit(): void {
    this.auth.authState.subscribe(this.user)
  }

  public async login() {
    const providers = new firebase.default.auth.GoogleAuthProvider()
    try {
      await this.auth.signInWithPopup(providers)
      alert('Login success')
    }
    catch (error) {
      alert('Login failed')
    }
  }
}