import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TipoJustificativaProvider } from '../../providers/tipo-justificativa/tipo-justificativa';

/**
 * Generated class for the TipoJustificativaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tipo-justificativa-edit',
  templateUrl: 'tipo-justificativa-edit.html',
})
export class TipoJustificativaEditPage {

  model: TipoJustificativa;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private tipoJustificativa: TipoJustificativaProvider)
    {
      if (this.navParams.data.tipoJustificativa) {
         this.model = this.navParams.data.tipoJustificativa;
        console.log(this.model);
      } else {
        console.log("não achou uma Justificativa");
        this.model = new TipoJustificativa();
      }

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipoJustificativaEditPage');
    console.log(this.model);
  }

  //metodo que salva os tipos de justificativas
  //em determinadas formas sendo por edit ou create

  salvar() {
    this.salvarTipoJustificativa()
      .then(() => {
        this.toast.create({
          message: 'Tipo de Justificativa salvo com sucesso.',
          position: 'botton', duration: 2000
        }).present();
        this.navCtrl.pop();
      })
      .catch((error) => {
        console.log("Erro salvando Tipo de Justificativa:");
        console.log(error);
        this.toast.create({
          message: 'Erro ao salvar o Tipo de Justificativa. Erro: ' + error,
          position: 'botton', duration: 2000
        }).present();
      })
  }
  private salvarTipoJustificativa() {
    if (this.model.id) {
      return this.tipoJustificativa.updateTipoJustificativa(this.model);
    } else {
      return this.tipoJustificativa.insertTipoJustificativa(this.model);
    }

  }




}
export class TipoJustificativa {
  id: number;
  nome: string;
  codigo: number;
}
