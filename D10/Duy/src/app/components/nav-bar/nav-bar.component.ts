import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import * as firebase from 'firebase';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }
  
  user:any

  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.user = user
        console.log(this.user.email)
      }
    })
  }

  public async login(){
    const provider = new firebase.default.auth.GoogleAuthProvider()
    try{
      await this.auth.signInWithPopup(provider)
      alert("Login Success")
    }
    catch(err){
      alert("Logined fail")
    }
  }

  public async logout(){ 
    try{
      await this.auth.signOut()
      alert("Signed out");
    }
    catch(err) {
      alert("cannot sign out");
    }    
  }
}
