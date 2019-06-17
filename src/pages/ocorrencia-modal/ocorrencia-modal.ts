import { TipoJustificativaProvider } from './../../providers/tipo-justificativa/tipo-justificativa';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-ocorrencia-modal',
  templateUrl: 'ocorrencia-modal.html',
})
export class OcorrenciaModalPage {
  item: any;

  constructor(
    public navCtrl: NavController,
    public params: NavParams/* , public viewCtrl: ViewController*/
    ) {
      this.item = params.get('item');
      console.log("item");
      console.log(this.item);
  }

   /* dismiss(){
    this.viewCtrl.dismiss();
  } */

  justificarOcorrencia(ocorrencia: any){
    this.navCtrl.push('JustificarOcorrenciaPage', {'ocorrencia': ocorrencia});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OcorrenciaModalPage');
  }

}
