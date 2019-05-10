import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';
import { UsersProvider } from '../../providers/users-providers/users-providers';

/**
 * Generated class for the TabelaFrequenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabela-frequencia',
  templateUrl: 'tabela-frequencia.html',
})
export class TabelaFrequenciaPage {

  users: any[];
  page: number;
  //lista: any[];
  
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) { }

  ionViewDidEnter() {
    this.users = [];
    this.page = 1;
   // this.infiniteScroll.enable(true);
    //this.get(this.page);
    /*
    this.lista=[
      {dia:1,hora:1800 },
      {dia:2,hora:1000 },
      {dia:3,hora:1800}
    ];
    */
  }
   
  
  
}
