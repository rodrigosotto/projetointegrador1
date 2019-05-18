import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {UserDetailPage} from '../user-detail/user-detail';


@IonicPage()
@Component({
  selector: 'page-gerente-perfil',
  templateUrl: 'gerente-perfil.html',
})
export class GerentePerfilPage {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.data.user;
  }
/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad GerentePerfilPage');
    
  }*/ 

}
