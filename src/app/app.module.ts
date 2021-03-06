import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProductDetailPage } from "../pages/product-detail/product-detail";
import { OpenFilterPage } from "../pages/open-filter/open-filter";



// Hentet disse og placeret dem i Imports
import {HttpClientModule} from "@angular/common/http"

import { HttpModule } from '@angular/http';
import { ProductProvider } from '../providers/product/product';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductDetailPage,
    OpenFilterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: "top",
      platforms: {
        ios: {
          tabsPlacement: "bottom"
        }
      }
    }),
    HttpModule,
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductDetailPage,
    OpenFilterPage
  ],
  providers: [
    ProductProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
