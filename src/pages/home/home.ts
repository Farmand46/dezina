import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';

import {Http} from "@angular/http";
import "rxjs/add/operator/map";

import {ProductProvider} from "../../providers/product/product";
import {ProductDetailPage} from "../product-detail/product-detail"

import {OpenFilterPage} from "../../pages/open-filter/open-filter";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allProducts =[];
  private femaleSelected = true;
  private maleSelected = true;

  constructor(private modalController: ModalController, private productProvider : ProductProvider, private http: Http, public navCtrl: NavController) {
   
  }
  
  openFilterModal(){
    let filterStateFromMainPage = {
      femaleSelected: this.femaleSelected,
      maleSelected: this.maleSelected
    }
    let openFilterModal = this.modalController.create(OpenFilterPage, filterStateFromMainPage);
    openFilterModal.onDidDismiss((filterState)=>{
      this.femaleSelected = filterState.femaleSelected;
      this.maleSelected = filterState.maleSelected;
      
      //console.log(filterState);
      this.productProvider.getProducts().subscribe((allProducts)=>{
        let products = allProducts;
        if (filterState.maleSelected && filterState.femaleSelected){
          this.allProducts = products;
          return; 
        } else if(!filterState.maleSelected && !filterState.femaleSelected){
          this.allProducts = [];
          return
        } else if(!filterState.maleSelected && filterState.femaleSelected ){
          this.allProducts = products.filter((product)=>{
            return product.gender !== "male"
          });
        } else {
          this.allProducts = products.filter((product)=>{
            return product.gender !== "female"
          });
        }
      });
    });
    openFilterModal.present();
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
