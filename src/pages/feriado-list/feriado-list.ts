import { FeriadoProvider } from './../../providers/feriado/feriado';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feriado-list',
  templateUrl: 'feriado-list.html',
})
export class FeriadoListPage {
  
  listaFeriados: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController, 
    public feriadoProvider: FeriadoProvider){

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeriadoListPage');
    
  }

  ionViewWillEnter(){
    this.getAllFeriados();
  }

  getAllFeriados() {
    this.feriadoProvider.getAllFeriados()
      .then((result: any) => {
        this.listaFeriados = result;
        console.log("feriados: "+this.listaFeriados);
        /*for (var i = 0; i < result.data.length; i++) {
          var user = result.data[i];
          this.users.push(user);
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.users.length == result.total) {
            this.infiniteScroll.enable(false);
          }
        }*/
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os feriados. Erro: ' + error, 
        position: 'botton', 
        duration: 2000 }).present();
      });
  }


  openEditFeriado(id: number) {
    console.log("openEditFeriado("+id+")");
    this.feriadoProvider.getFeriado(id)
      .then((result: any) => {
        //console.log("result: "+result.nome);
        this.navCtrl.push('FeriadoEditPage', { feriado: result });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o feriado. Erro: ' + error.error, 
        position: 'botton', duration: 3000 }).present();
      });
  }

  deleteFeriado(feriado: any) {
    //console.log("deleteferiado:");
    //console.log(feriado);
    this.feriadoProvider.removeFeriado(feriado.id)
      .then((result: any) => {
        let index = this.listaFeriados.indexOf(feriado);
        this.listaFeriados.splice(index, 1);

        this.toast.create({ message: 'Feriado excluído com sucesso.', 
        position: 'botton', 
        duration: 2000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ 
          message: 'Erro ao excluir o Feriado. Erro: ' + error, 
          position: 'botton', 
          duration: 3000 }).present();
      });
  }


  openCreateFeriado(){
    this.navCtrl.push('FeriadoEditPage');
  }
}
