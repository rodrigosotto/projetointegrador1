import { AuthProvider } from './../../providers/auth/auth';
import { GlobalProvider } from './../../providers/global/global';
import { JustificativaProvider } from './../../providers/justificativa/justificativa';
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
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public tipoJustProvider: TipoJustificativaProvider,
    public justificativaProvider: JustificativaProvider,
    public global: GlobalProvider, public auth: AuthProvider) {

      this.user = this.auth.getUser();
      this.ocorrencia = this.navParams.get('ocorrencia');
      if(this.ocorrencia.justificativa){
        this.model = this.ocorrencia.justificativa;
      } else {
        this.model = new Justificativa();
      }
      this.model.ocorrencia_id = this.ocorrencia.id;
      this.model.user_id = this.user.id; //temporario
      this.model.area_id = this.user.area_id; //temporario
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
    this.justificativaProvider.salvarJustificativa(this.model).subscribe((result: any) => {
      this.global.showAlert("Aviso","Justificativa enviada ao gerente e aguardando aprovação.");
      this.navCtrl.remove(this.navCtrl.getActive().index-1,2);
    },
      (error) => {
        this.global.showAlert("Resultado","ERRO!");
      });
  }

}

export class Justificativa {
  id: number;
  observacao: string;
  ocorrencia_id: number;
  tipo_justificativa_id: number;
  user_id: number; //temporario
  area_id: number; //temporario
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
