import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoJustificativaProvider } from '../../providers/tipo-justificativa/tipo-justificativa';

/**
 * Generated class for the JustificarOcorrenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-justificar-ocorrencia',
  templateUrl: 'justificar-ocorrencia.html',
})
export class JustificarOcorrenciaPage {
  ocorrencia: any;
  tiposJustificativa: any[];
  model: Justificativa;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public tipoJustProvider: TipoJustificativaProvider) {
      this.ocorrencia = this.navParams.get('ocorrencia');
      if(this.ocorrencia.justificativa){
        this.model = this.ocorrencia.justificativa;
      } else {
        this.model = new Justificativa();
      }
      this.model.ocorrencia_id = this.ocorrencia.id;
      this.getListaTiposJustificativa();
  }

  getListaTiposJustificativa() {
    this.tipoJustProvider.getAllTipoJustificativas().then((result: any) => {
      this.tiposJustificativa = result;
      console.log("Lista de Tipos de Justificativa");
      console.log(this.tiposJustificativa);
    },
      (error: any) => {
        //mostrar erro..
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JustificarOcorrenciaPage');
    console.log("ocorrencia",this.ocorrencia);
    console.log("model",this.model);
  }

  enviarJustificativa(){

  }

}

export class Justificativa {
  id: number;
  observacao: string;
  ocorrencia_id: number;
  tipo_justificativa_id: number;
  status: string;
}

/*
"id": 1,
"observacao": "teste observacao",
"ocorrencia_id": 3,
"tipo_justificativa_id": 1,
"status": "PENDENTE",
"ocorrencia": {
"id": 3,
"registro_diario_id": 10,
"tipo_ocorrencia_id": 10
},
"tipo_justificativa": {
"id": 1,
"codigo": "ATM",
"nome": "Atestado Médico"
}*/
