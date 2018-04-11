import { Component, OnInit } from '@angular/core';
 
import {AuthService} from './../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService} from '.././user.service';
import {User} from  '.././models/user.model';
import {UtilFunctions} from  '.././utils/util-function';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  user: User;
  form;
  constructor(public authService:AuthService, private userService: UserService) {
     this.form =  new FormGroup({
         userName : new FormControl(""),
         password : new FormControl(""),
         }) 
  }

  login(){
    this.authService.login();
  }

   private loginUser(user) {
    this.userService.loginUser(user).subscribe(
      (res: User) => {
        UtilFunctions.setLocalStorage('user', JSON.stringify(res));
        console.log(res);
      },
      resErr => {
        
      }
    );
  }

}
