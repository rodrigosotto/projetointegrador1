import { GlobalProvider } from './../../providers/global/global';
import { JustificativaProvider } from './../../providers/justificativa/justificativa';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PendenciasGerentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendencias-gerente',
  templateUrl: 'pendencias-gerente.html',
})
export class PendenciasGerentePage {
  lista: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public justProvider: JustificativaProvider, public global: GlobalProvider) {

      this.getPendencias();
  }

  getPendencias(){
    this.justProvider.justificativasPendentes().subscribe((result:any) =>{
      this.lista = result;
      }, (error: any)=>{
        //mostrar o erro
      }
    );

  }

  aprovar(id: number){
    this.justProvider.setParecer(id, "APROVADA").subscribe((/* result:any */) =>{
      this.getPendencias();
    }, (error: any) => {

    });

  }

  reprovar(id: number){
    this.justProvider.setParecer(id, "REPROVADA").subscribe((/* result:any */) =>{
      this.getPendencias();
    }, (error: any) => {

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendenciasGerentePage');
  }

}
