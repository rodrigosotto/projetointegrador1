import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, AlertOptions } from 'ionic-angular';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  constructor(public http: HttpClient, public alertController: AlertController) {
    console.log('Hello GlobalProvider Provider');
  }
  API_URL = "http://localhost:8000/api/";

  public showAlert(title, msg) {
    let alert = this.alertController.create({
      message: msg,
      title: title,
      buttons: ['OK']
    }).present();
  }
}
