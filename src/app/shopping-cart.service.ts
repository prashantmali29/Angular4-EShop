import { Injectable } from '@angular/core';
import { Constants } from './app.constant'
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map';
import {Cart} from    './models/cart.model';

@Injectable()
export class ShoppingCartService {

  constructor(private _http: Http) { }

  create(){
   var cart = new Cart(new Date().getTime());
   return this._http.post(Constants.URL.host_url + Constants.URL.saveCartCreatedTime, cart)
  .map((response: Response) => {
        return response.json();
      })
  .catch(this._errorHandler1);
  }

  _errorHandler1(error: Response) {
    return Observable.throw(error || 'server error');
 
  }


}

