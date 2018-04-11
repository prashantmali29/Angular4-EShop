import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';
import { Constants } from './app.constant'
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch'


@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase,private _http: Http) { }

  saveUser(user :firebase.User){
    this.db.object('/users/'+ user.uid).update({
     name : user.displayName,
     email : user.email
    });
  }

  createUser(user){
   return this._http.post(Constants.URL.host_url + Constants.URL.saveUser , user)
  .map((response: Response) => {
        return response.json();
      })
  .catch(this._errorHandler);
  }

  _errorHandler(error: Response) {
    return Observable.throw(error || 'server error');
 
  }

  loginUser(user){
   return this._http.post(Constants.URL.host_url + Constants.URL.loginURL , user)
  .map((response: Response) => {
        return response.json();
      })
  .catch(this._errorHandler);
  }

  _errorHandler1(error: Response) {
    return Observable.throw(error || 'server error');
 
  }

}
