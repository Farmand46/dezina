import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Http} from "@angular/http";
import "rxjs/add/operator/map";


/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

  constructor(public http: Http) {
    console.log('Hello ProductProvider Provider');
  }

  getProducts(){
    console.log('Hello ProductProvider Provider - getProducts()');
    return this.http.get('/../assets/data.json').map(response => response.json());
  }

}
