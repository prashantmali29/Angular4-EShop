import { Component, OnInit,Input } from '@angular/core';
import {AuthService} from './../auth.service';
import {User} from '.././models/user.model';
import {UtilFunctions} from '.././utils/util-function';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit  {
  user;
  
  @Input() user1: any;

  ngOnInit(){
    this.user = UtilFunctions.getLocalStorage("user");
  }

  constructor(public authservice:AuthService) {
   this.user = UtilFunctions.getLocalStorage("user");
   }

  logout(){
  this.authservice.logout();
  }


}
