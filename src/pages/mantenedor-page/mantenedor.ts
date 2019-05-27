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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MantenedorPage');
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

  openTipoDeJustificativaList(){
    this.navCtrl.push('TipoDeJustificativaListPage')
  }
  openArea(){
    this.navCtrl.push('AreaListPage');
  }
  openJornada(){
    this.navCtrl.push('JornadaListPage');
  }
}
