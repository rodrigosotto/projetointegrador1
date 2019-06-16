import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the UsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class UsuarioPage {
  user: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,  public auth: AuthProvider) {
    this.user = this.auth.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
    console.log(this.user);//ver no console o que esta vindo
  }
  logout(){
    this.auth.logout();
    //localStorage.clear();//limpa se foi gravado no storage
    this.navCtrl.setRoot(LoginPage);//volta pra pagina inicial

   //this.navCtrl.push('LogoutPage');
   //alert("This is logout");
 }

 openRelatorioFrequencia(){
   this.navCtrl.push('RelatorioFrequenciaPage');
 }
}
