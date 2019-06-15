import { TipoOcorrenciaProvider } from './../../providers/tipo-ocorrencia/tipo-ocorrencia';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tipos-ocorrencia-list',
  templateUrl: 'tipos-ocorrencia-list.html',
})
export class TiposOcorrenciaListPage { 

  tipoOcorrencia:any[]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toast: ToastController,
    public tipoOcorrenciaProvider: TipoOcorrenciaProvider
    ){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipoJustificativaListPage');
  }
  ionViewWillEnter(){
    this.getAllTipoOcorrencias();
  }

  getAllTipoOcorrencias(){
    this.tipoOcorrenciaProvider.getAllTipoOcorrencias()
    .then((result: any) => {
      this.tipoOcorrencia = result;
      console.log("tipoOcorrencia: "+this.tipoOcorrencia);
    })
    .catch((error: any) => {
      this.toast.create({ 
        message: 'Erro ao buscar tipos de Ocorrencias. Erro: ' + error, 
        position: 'botton', 
        duration: 2000 }).present();
    });
  }
  openEditTipoOcorrencia(id: number) {
    console.log("openEditTipoOcorrencia("+id+")");
    this.tipoOcorrenciaProvider.getTipoOcorrencia(id)
      .then((result: any) => {
         this.navCtrl.push('TiposOcorrenciaEditPage', { tipoOcorrencia: result });
      })
      .catch((error: any) => {
        this.toast.create({
          message: 'Erro ao recuperar o Tipo Ocorrencias. Erro: ' + error, 
          position: 'botton', 
          duration: 2000 }).present();
      });
  }

  deleteTipoOcorrencia(tipoOcorrencia: any) {
    this.tipoOcorrenciaProvider.removeTipoOcorrencia(tipoOcorrencia.id)
      .then((result: any) => {
        let index = this.tipoOcorrencia.indexOf(tipoOcorrencia);
        this.tipoOcorrencia.splice(index, 1);

        this.toast.create({ 
        message: 'Tipo de Ocorrencia excluído com sucesso.', 
        position: 'botton', 
        duration: 2000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ 
          message: 'Erro ao excluir o Tipo de Ocorrencia. Erro: ' + error, 
          position: 'botton', 
          duration: 2000 }).present();
      });
  }

  openCreateTipoOcorrencia(){
    this.navCtrl.push('TiposOcorrenciaEditPage');
  }
}


