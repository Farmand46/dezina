import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the OpenFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-filter',
  templateUrl: 'open-filter.html',
})
export class OpenFilterPage {
  public femaleSelected=true;
  public maleSelected=true;

  constructor(private viewController: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenFilterPage');
  }

  closeModal(){
    let filterState = {
      femaleSelected: this.femaleSelected,
      maleSelected: this.maleSelected
    };
    this.viewController.dismiss(filterState);
    //this.navCtrl.pop();
    
  }

}
