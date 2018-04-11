import { Injectable } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {ActivatedRoute} from '@angular/router'
import {UserService} from './user.service'

@Injectable()
export class AuthService {

  user : firebase.User;

  constructor(private afAuth: AngularFireAuth, private route:ActivatedRoute,private userService: UserService) {
    afAuth.authState.subscribe(user => this.user = user);
    if(this.user){
      userService.saveUser(this.user);
    }
   }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem("returnUrl",returnUrl);
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
  this.afAuth.auth.signOut();
  }

}
