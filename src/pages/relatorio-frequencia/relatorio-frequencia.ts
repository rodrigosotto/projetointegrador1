 import { FrequenciaProvider } from './../../providers/frequencia/frequencia';
import { GlobalProvider } from './../../providers/global/global';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
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


  constructor(
    public http: HttpClient, 
    public global: GlobalProvider,
    public frequenciaProvider: FrequenciaProvider, 
    private toast: ToastController
    ) {
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
    

  }



}
