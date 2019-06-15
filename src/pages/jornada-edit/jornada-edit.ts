import { JornadaProvider } from './../../providers/jornada/jornada';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Time } from '@angular/common';

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

  salvar() {
    this.saveJornadas()
      .then(() => {
        this.toast.create({ 
        message: 'Jornada salva com Sucesso.',
        position: 'botton', 
        duration: 2000 
      }).present();
        this.navCtrl.pop();
      })
      .catch((error) => {
        console.log("Erro ao salvar Jornada:");
        console.log(error);
        
        this.toast.create({ 
        message: 'Erro ao salvar Jornada. Erro: ' + error, 
        position: 'botton', 
        duration: 2000 
      }).present();
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
  entrada: Time;
  saida: Time;
}
