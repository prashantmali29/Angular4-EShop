import { Injectable } from '@angular/core';
import { Constants } from './app.constant'
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map';


@Injectable()
export class CategoryService {

  constructor(private _http: Http) { }

  getAllCategory(){
   return this._http.get(Constants.URL.host_url + Constants.URL.getAllCategory)
  .map((response: Response) => {
        return response.json();
      })
  .catch(this._errorHandler1);
  }

  _errorHandler1(error: Response) {
    return Observable.throw(error || 'server error');
 
  }

}
