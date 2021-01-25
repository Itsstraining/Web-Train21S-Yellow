import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private DataLogin: AngularFireAuth) { }
  user: any
  ngOnInit(): void {
    this.DataLogin.authState.subscribe((user => {
      if (user) {
        this.user = user
        console.log(this.user)
      }
    }))

  }
  public async Login() {
    const providers = new firebase.default.auth.GoogleAuthProvider()
    try 
    {
      await this.DataLogin.signInWithPopup(providers)
      alert("Login Success")
    }
    catch (err) {
      alert("Login Failed")
    }
  }
  public async Logout() 
  {
    try 
    {
      await this.DataLogin.signOut()
      alert("Logout Success")
    }
    catch (err){
      alert("Logout Failed")
    }
  }
}
  