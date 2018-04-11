import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot} from '@angular/router';
import { Router}   from '@angular/router';
import {AuthService} from './auth.service'

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth :AuthService,private router :Router) { }

  canActivate(route, state: RouterStateSnapshot){
    if(this.auth.user)
    return true ;
    else
      this.router.navigate(['/login'],{queryParams:{returnUrl :state.url}});
      return false;
  }

}
