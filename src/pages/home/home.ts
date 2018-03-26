import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';

import {Http} from "@angular/http";
import "rxjs/add/operator/map";

import {ProductProvider} from "../../providers/product/product";
import {ProductDetailPage} from "../product-detail/product-detail"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allProducts =[];

  constructor(private productProvider : ProductProvider, private http: Http, public navCtrl: NavController) {
   
  }

  ionViewDidLoad(){
    console.log("ionVievDidLoad");
    //this.http.get('/assets/data.json')
    //.map(response => response.json())
    //.subscribe(data => console.log(data));
    //this.productProvider.getProducts().subscribe(response => console.log(response));
    this.productProvider.getProducts().subscribe((response) => {this.allProducts = response});

  }

  gotoProductDetailPage(product){
    this.navCtrl.push(ProductDetailPage, {
      productDetails: product
    });
  }

}
