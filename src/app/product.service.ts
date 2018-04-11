import { Injectable } from '@angular/core';
import { Constants } from './app.constant'
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  
  saveProduct(product){
   return this._http.post(Constants.URL.host_url + Constants.URL.saveProduct, product)
  .map((response: Response) => {
        return response.json();
      })
  .catch(this._errorHandler1);
  }

  _errorHandler1(error: Response) {
    return Observable.throw(error || 'server error');
 
  }

  getAllProduct(){
    return this._http.get(Constants.URL.host_url + Constants.URL.getAllProduct)
  .map((response: Response) => {
        return response.json();
      })
  .catch(this._errorHandler1);
  }

  getProductById(productId){
    return this._http.get(Constants.URL.host_url + Constants.URL.getProductById+productId)
  .map((response: Response) => {
        return response.json();
      })
  .catch(this._errorHandler1);
  }
   
deleteProductById(productId){
  return this._http.get(Constants.URL.host_url + Constants.URL.deleteProductById+productId)
  .catch(this._errorHandler1);
  }
}
