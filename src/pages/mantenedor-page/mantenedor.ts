import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
//import { UserListMantenedorPage } from '../user-list-mantenedor/user-list-mantenedor'
//import { AreaPage } from '../area/area';
/**
 * Generated class for the MantenedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mantenedor',
  templateUrl: 'mantenedor.html',
})
export class MantenedorPage {
  user: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public auth: AuthProvider) 
    {
    this.user = this.auth.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MantenedorPage');
    //this.user = this.auth.getUser();
    console.log(this.user);
  }
  logout(){
    localStorage.clear();//limpa se foi gravado no storage
    this.navCtrl.setRoot(LoginPage);//volta pra pagina inicial
   //this.navCtrl.push('LogoutPage');
   //alert("This is logout");
 }
 openUserListMantenedorPage(){
  this.navCtrl.push ('UserListMantenedorPage' );
  }

  openTipoJustificativa(){
    this.navCtrl.push('TipoJustificativaListPage')
  }
  openArea(){
    this.navCtrl.push('AreaListPage');
  }
  openJornada(){
    this.navCtrl.push('JornadaListPage');
  }

  openFeriados(){
    this.navCtrl.push('FeriadoListPage');
  }
  openTipoOcorrencia(){
    this.navCtrl.push('TiposDeOcorrenciasListPage');
  }

}
/*
area: null
cartao: "10007"
email: "gestor"
id: 6
login: "gestor"
matricula: 10007
nome: "gestor"
*/
