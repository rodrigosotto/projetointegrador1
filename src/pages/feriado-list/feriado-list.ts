import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feriado-list',
  templateUrl: 'feriado-list.html',
})
export class FeriadoListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeriadoListPage');
  }


  openCreateFeriado(){
    this.navCtrl.push('FeriadoEditPage');
  }
}
