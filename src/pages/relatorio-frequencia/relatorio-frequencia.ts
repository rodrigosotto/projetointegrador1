import { AuthProvider } from './../../providers/auth/auth';
import { FrequenciaProvider } from './../../providers/frequencia/frequencia';
import { GlobalProvider } from './../../providers/global/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the RelatorioFrequenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-relatorio-frequencia',
  templateUrl: 'relatorio-frequencia.html',
})
export class RelatorioFrequenciaPage {

  //private API_URL = 'http://localhost:8000/api/'
  private url;
  relatorio: any;
  //user: any;
  lista: any;


  constructor(public http: HttpClient, public global: GlobalProvider,
    public frequenciaProvider: FrequenciaProvider, private toast: ToastController/*,
    public auth: AuthProvider*/) {
    //TODO: contructor stuff
    this.frequenciaMensal();
    //this.user = this.auth.getUser();
    console.log("construtor");
  }

  ionViewDidLoad() {
    console.log('RelatorioFrequenciaPage - ionViewDidLoad');
    //this.frequenciaMensal();
  }
  ionViewDidEnter() {
    console.log('RelatorioFrequenciaPage - ionViewDidEnter');
  }

  frequenciaMensal() {
    this.frequenciaProvider.frequenciaMensal().subscribe((result: any) => {
      this.relatorio = result;
      this.lista = this.relatorio.lista;

      console.log("relatorio:");
      console.log(this.relatorio);
      console.log("lista:");
      console.log(this.lista);
    },
      (error: any) => {
        this.relatorio = "erro...";
      }

    );
    /*this.frequenciaProvider.frequenciaMensal()
    .then((result: any) =>{
      this.relatorio = result;
      this.user2 = this.relatorio;//.user;
      this.lista = this.relatorio.lista;
      console.log(this.relatorio);
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao consultar relatório de frequência. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
    });*/

  }



}
