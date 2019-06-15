import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TipoOcorrenciaProvider } from '../../providers/tipo-ocorrencia/tipo-ocorrencia';

@IonicPage()
@Component({
  selector: 'page-tipos-ocorrencia-edit',
  templateUrl: 'tipos-ocorrencia-edit.html',
})
export class TiposOcorrenciaEditPage {

  model: TipoOcorrencia;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast:ToastController,
    private tipoOcorrenciaProvider:TipoOcorrenciaProvider
    ) {//se existe o parametro tipoOcorrencia ele vai preencher o campo e senao nao vai valdir!
      if (this.navParams.data.tipoOcorrencia) {
        this.model = this.navParams.data.tipoOcorrencia;
       console.log(this.model);
     } else {
       console.log("não achou uma Ocorrencias");
       this.model = new TipoOcorrencia();
     }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TiposOcorrenciaEditPage');
  }
  salvar() {
    this.salvarTipoOcorrencia()
      .then(() => {
        this.toast.create({
          message: 'Tipo de Ocorrencias salvo com sucesso.',
          position: 'botton', duration: 2000
        }).present();
        this.navCtrl.pop();
      })
      .catch((error) => {
        console.log("Erro salvando Tipo de Ocorrencia:");
        console.log(error);
        this.toast.create({
          message: 'Erro ao salvar o Tipo de Ocorrencia. Erro: ' + error,
          position: 'botton', duration: 2000
        }).present();
      })
  }
  private salvarTipoOcorrencia() {
    if (this.model.id) {
      return this.tipoOcorrenciaProvider.updateTipoOcorrencia(this.model);
    } else {
      return this.tipoOcorrenciaProvider.insertTipoOcorrencia(this.model);
    }

  }
}
export class TipoOcorrencia {
  id: number;
  nome: string;
  codigo: string;
  }
