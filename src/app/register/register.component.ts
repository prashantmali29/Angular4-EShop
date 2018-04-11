import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService} from '.././user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.form =  new FormGroup({
         firstName : new FormControl(""),
         lastName  : new FormControl(""),
         city  : new FormControl(""),
         mobileNumber  : new FormControl(""),
         userName : new FormControl(""),
         password : new FormControl(""),
         })
  }

  onSubmit(user){
   this.createUser(user);
   console.log(user);
  }
  
  private createUser(user) {
    this.userService.createUser(user).subscribe(
      (res) => {
        console.log(res);
      },
      resErr => {
        
      }
    );
  }

}
