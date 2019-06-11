import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users-providers/users-providers';

@IonicPage()
@Component({
  selector: 'page-jornada-list',
  templateUrl: 'jornada-list.html',
})
export class JornadaListPage {

  page: number;
  jornada: any[];
  model: JornadaListPage;

  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private toast: ToastController, private userProvider: UsersProvider) { }

  openCreateJornada(){
    this.navCtrl.push('JornadaEditPage');
  }

  // abrir para editar jornadas
  /*
  openEditJornada(id: number) {
    this.userProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('JornadaEditPage', { Jornada: result.data });
      }) 
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar a jornada. Erro: ' + error.error.error, position: 'botton', duration: 3000 }).present();
      });
  }
*/
  //metodo delete  jornadas
  deleteJornada(jornada: any) {
    this.userProvider.remove(jornada.id)
      .then((result: any) => {
        let index = this.jornada.indexOf(jornada);
        this.jornada.splice(index, 1);

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
  
  getAllJornadas(page: number) {
    console.log("disgraçaaaaa");

    this.userProvider.getAll(page)
      .then((result: any) => {
        for (var i = 0; i < result.data.length; i++) {
          var user = result.data[i];
          this.jornada.push(this.jornada);
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.jornada.length == result.total) {
            this.infiniteScroll.enable(false);
          }
        }
       })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar tipos de jornadas. Erro: ' + error.error.error, 
        position: 'botton', duration: 3000 }).present();
      });
  }

}