import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users-providers/users-providers';

/**
 * Generated class for the JornadaListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornada-list',
  templateUrl: 'jornada-list.html',
})
export class JornadaListPage {

  page: number;
  jornadas: any[];
  model: JornadaListPage;

  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private toast: ToastController, private userProvider: UsersProvider) { }

  openCreateJustificativaPage(){
    this.navCtrl.push('TipoJustificativaEditPage');
  }

  // abrir para editar jornadas
  openEditJustificativa(id: number) {
    this.userProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('JornadaEditPage', { tipoJustificativa: result.data });
      }) 
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o justificativa. Erro: ' + error.error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  //metodo delete  jornadas
  deleteTipoJustificativa(jornadas: any) {
    this.userProvider.remove(jornadas.id)
      .then((result: any) => {
        let index = this.jornadas.indexOf(jornadas);
        this.jornadas.splice(index, 1);

        this.toast.create({ message: 'Jornada de trabalho excluída com sucesso.', position: 'botton', 
        duration: 3000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao excluir a jornada de trabalho. Erro: ' + error.error.error, 
        position: 'botton', 
        duration: 3000 }).present();
      });
  }

  //metodo que lista todas jornadas
  getAllTiposDeJustificativas(page: number) {
    this.userProvider.getAll(page)
      .then((result: any) => {
        for (var i = 0; i < result.data.length; i++) {
          var user = result.data[i];
          this.jornadas.push(user);
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.jornadas.length == result.total) {
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