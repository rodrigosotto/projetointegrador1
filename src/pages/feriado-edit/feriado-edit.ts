import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FeriadoProvider } from '../../providers/feriado/feriado';

@IonicPage()
@Component({
  selector: 'page-feriado-edit',
  templateUrl: 'feriado-edit.html',
})
export class FeriadoEditPage {

  model: Feriado;

constructor(public navCtrl: NavController, public navParams: NavParams,
  private toast: ToastController, private feriadoProvider:FeriadoProvider ) {
    if (this.navParams.data.feriado) {
      //console.log(this.navParams.data.feriado);
      this.model = this.navParams.data.feriado;
      console.log(this.model);
    } else {
      console.log("não achou feriado");
      this.model = new Feriado();
    }
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeriadoEditPage');
    console.log(this.model);
  }
  salvar() {
    this.salvarFeriado()
      .then(() => {
        this.toast.create({ message: 'Feriado salvo com sucesso.',
        position: 'botton', duration: 3000 }).present();
        this.navCtrl.pop();
      })
      .catch((error) => {
        console.log("Erro salvando feriado:");
        console.log(error);
        this.toast.create({ message: 'Erro ao salvar o feriado. Erro: ' + error.error,
        position: 'botton', duration: 3000 }).present();
      })
  }
  private salvarFeriado() {
    if (this.model.id) {
      return this.feriadoProvider.updateFeriado(this.model);
    } else {
      return this.feriadoProvider.insertFeriado(this.model);
    }

  }
}
export class Feriado {
  id: number;
  nome: string;
  data: Date;
}
