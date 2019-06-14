import { JornadaProvider } from './../../providers/jornada/jornada';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
//import { UsersProvider } from '../../providers/users-providers/users-providers';
import { Time } from '@angular/common';

/**
 * Generated class for the JornadaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornada-edit',
  templateUrl: 'jornada-edit.html',
})
export class JornadaEditPage {

  model: Jornada;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController, 
    private JornadaProvider:JornadaProvider
    ) {
    if (this.navParams.data.jornada) {
      //console.log(this.navParams.data.feriado);
      this.model = this.navParams.data.jornada;
      console.log(this.model);
    } else {
      console.log("não achou jornada");
      this.model = new Jornada();
    }
  }

  saveNewJornadas() {
    this.saveJornadas()
      .then(() => {
        this.toast.create({ message: 'Nova jornada salva com sucesso.', position: 'botton', 
        duration: 3000 }).present();
        this.navCtrl.pop();
      })
      .catch((error) => {
        this.toast.create({ message: 'Erro ao salvar nova jornada. Erro: ' + error.error, 
        position: 'botton', duration: 3000 }).present();
      })
  }

  private saveJornadas() {
    if (this.model.id) {
      return this.JornadaProvider.updateJornada(this.model);
    } else {
      return this.JornadaProvider.insertJornada(this.model);
    }
  }
}

export class Jornada {
  id: number;
  nome: string;
  Entrada: Time;
  Saida: Time;
}
