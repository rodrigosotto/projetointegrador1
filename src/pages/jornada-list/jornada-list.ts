//import { AreaListPage } from './../area-list/area-list';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, ToastController } from 'ionic-angular';
import { JornadaProvider } from '../../providers/jornada/jornada';

@IonicPage()
@Component({
  selector: 'page-jornada-list',
  templateUrl: 'jornada-list.html',
})
export class JornadaListPage {

  page: number;
  listaJornadas: any[];
  jornada: any[];

  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController, 
    private jornadaProvider: JornadaProvider) { 

     }

    ionViewWillEnter(){
      this.getAllJornadas();
    }

  openCreateJornada() {
    this.navCtrl.push('JornadaEditPage');
  }

  // abrir para editar jornadas

  openEditJornada(id: number) {
    console.log("openEditJornada: ("+id+")");
    this.jornadaProvider.getJornada(id)
      .then((result: any) => {
        this.navCtrl.push('JornadaEditPage', { jornada: result});
      })
      .catch((error: any) => {
        this.toast.create({
          message: 'Erro ao recuperar a jornada. Erro: ' + error,
          position: 'botton', 
          duration: 2000
        }).present();
      });
  }

  //metodo delete  jornadas
  deleteJornada(jornada: any) {
    this.jornadaProvider.removeJornada(jornada.id)
      .then((result: any) => {
        let index = this.jornada.indexOf(jornada);
        this.jornada.splice(index, 1);

        this.toast.create({
          message: 'Jornada de trabalho excluída com sucesso.', position: 'botton',
          duration: 2000
        }).present();
      })
      .catch((error: any) => {
        this.toast.create({
          message: 'Erro ao excluir a jornada de trabalho. Erro: ' + error,
          position: 'botton',
          duration: 2000
        }).present();
      });
  }

  //metodo que lista todas jornadas
 
  getAllJornadas() {
     this.jornadaProvider.getAllJornadas()
      .then((result: any) => {
        this.listaJornadas = result;
        console.log("jornadas: "+this.listaJornadas);
      })
      .catch((error: any) => {
        this.toast.create({
          message: 'Erro ao listar tipos de jornadas. Erro: ' + error,
          position: 'botton', duration: 2000
        }).present();
      });
  }

}