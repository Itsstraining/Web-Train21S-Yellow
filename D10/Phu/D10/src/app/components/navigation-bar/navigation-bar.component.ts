import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth'
import * as firebase from 'firebase';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor(private datalogin: AngularFireAuth) { }

  user:any

  ngOnInit(): void {
    this.datalogin.authState.subscribe((user)=>{
      if (user) {
        this.user = user
        console.log(this.user.photoURL)
      }
    })
  }

  public async login()
  {
    const provider = new firebase.default.auth.GoogleAuthProvider()
    try{
      await this.datalogin.signInWithPopup(provider)
      alert("Login Success")
    }
    catch(err){
      alert("Login Fail")
    }

  }

  public async logout()
  {
    try {
      await this.datalogin.signOut();
      alert("Signout");
    } catch (err){
      alert("Cannot signout")
  }

}
}