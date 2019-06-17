import { OcorrenciaModalPage } from './../ocorrencia-modal/ocorrencia-modal';
import { AuthProvider } from './../../providers/auth/auth';
import { FrequenciaProvider } from './../../providers/frequencia/frequencia';
import { GlobalProvider } from './../../providers/global/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

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
    public frequenciaProvider: FrequenciaProvider, private modal : ModalController,
    private toast: ToastController, public navCtrl: NavController,
    public navParams: NavParams,
    /*, public auth: AuthProvider*/) {
    //TODO: contructor stuff

    //this.user = this.auth.getUser();
    console.log("construtor");
  }

  ionViewWillEnter(){
    this.frequenciaMensal();
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


  }

  openOcorrenciaModal(item: any){
    console.log("modal(registro)");
    console.log(item);
    if(item.ocorrencias.length>0){
      this.navCtrl.push(OcorrenciaModalPage, {'item': item});
      //let modal = this.modal.create(OcorrenciaModalPage, {'item': item});
      //modal.present();
    }
  }

  getBadgeColor(ocorrencia: any):string {
    //aqui vou fazer uns testes
    return "danger";
  }


}
