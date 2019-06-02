import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TiposDeOcorrenciasEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tipos-de-ocorrencias-edit',
  templateUrl: 'tipos-de-ocorrencias-edit.html',
})
export class TiposDeOcorrenciasEditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiposDeOcorrenciasEditPage');
  }

}
