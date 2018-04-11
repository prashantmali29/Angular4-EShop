import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import { AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {UserService} from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user:firebase.User;
  constructor(private userService:UserService,private afAuth: AngularFireAuth,private auth:AuthService,private route:Router){
     afAuth.authState.subscribe(user => this.user = user);
    if(this.user){
      userService.saveUser(this.user);
     let returnUrl = localStorage.getItem('returnUrl');
     route.navigateByUrl(returnUrl);
    }

  }
}
