import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';
import { UsersProvider } from '../../providers/users-providers/users-providers';
import { TipoJustificativa } from '../tipo-justificativa-edit/tipo-justificativa-edit';
  


@IonicPage()
@Component({
  selector: 'page-tipo-de-justificativa-list',
  templateUrl: 'tipo-de-justificativa-list.html',
})
export class TipoDeJustificativaListPage {

  page: number;
  tipoJustificativa: any[];
  model: TipoJustificativa;

  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private toast: ToastController, private userProvider: UsersProvider) { }

  openCreateJustificativaPage(){
    this.navCtrl.push('TipoJustificativaEditPage');
  }

  // abrir para editar tipos de justificativa
  openEditJustificativa(id: number) {
    this.userProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('TipoJustificativaEditPage', { tipoJustificativa: result.data });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o justificativa. Erro: ' + error.error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  //metodo delete tipo de justificativas
  deleteTipoJustificativa(tipoJustificativa: any) {
    this.userProvider.remove(tipoJustificativa.id)
      .then((result: any) => {
        let index = this.tipoJustificativa.indexOf(tipoJustificativa);
        this.tipoJustificativa.splice(index, 1);

        this.toast.create({ message: 'Justificativa excluída com sucesso.', position: 'botton', 
        duration: 3000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao excluir a justificativa. Erro: ' + error.error.error, position: 'botton', 
        duration: 3000 }).present();
      });
  }

  //metodo que lista todos os tipos de justificativas
  getAllTiposDeJustificativas(page: number) {
    this.userProvider.getAll(page)
      .then((result: any) => {
        for (var i = 0; i < result.data.length; i++) {
          var user = result.data[i];
          this.tipoJustificativa.push(user);
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.tipoJustificativa.length == result.total) {
            this.infiniteScroll.enable(false);
          }
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar tipos de justificativas. Erro: ' + error.error.error, 
        position: 'botton', duration: 3000 }).present();
      });
  }


}
/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad TipoDeJustificativaListPage');
  }
  */



