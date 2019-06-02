import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FeriadoProvider } from '../../providers/feriado/feriado';

@IonicPage()
@Component({
  selector: 'page-feriado-edit',
  templateUrl: 'feriado-edit.html',
})
export class FeriadoEditPage {

  model: Feriados;
 
constructor(public navCtrl: NavController, public navParams: NavParams, 
  private toast: ToastController, private feriadoProvider:FeriadoProvider ) {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeriadoEditPage');
  }
  salvar() {
    this.salvarFeriados()
      .then(() => {
        this.toast.create({ message: 'Feriado salvo com sucesso.', 
        position: 'botton', duration: 3000 }).present();
        //this.navCtrl.pop();
      })
      .catch((error) => {
        this.toast.create({ message: 'Erro ao salvar o feriado. Erro: ' + error.error.error, 
        position: 'botton', duration: 3000 }).present();
      })
  }
  private salvarFeriados() {
    if (this.model.id) {
      return this.feriadoProvider.updateFeriados(this.model);
    } else {
      return this.feriadoProvider.insertFeriados(this.model);
    }
    
  }
}
export class Feriados {
  id: number;
  nome: string;
  data: Date;
}
