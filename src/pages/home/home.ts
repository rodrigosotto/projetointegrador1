import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { GerentePerfilPage } from '../gerente-perfil/gerente-perfil';
import { LoginPage } from '../login/login';
//import { LogoutPage } from '../logout/logout';
//import { MantenedorPage } from '../mantenedor-page/mantenedor';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
    this.user = this.auth.getUser();
  }

  openCreateAccount() {
    this.navCtrl.push('CreateAccountPage');
    console.log(this.user);

  }

  openListUsers() {
    this.navCtrl.push('UserListPage');
  }

  openPendencias() {
    //this.navCtrl.push('MinhasPendenciasPage')
    this.navCtrl.push('PendenciasGerentePage');
  }
  openListArea() {
    //this.navCtrl.push('TabelaFrequenciasPage');
    this.navCtrl.push('UserListGerentePage');
  }
  openGerentePerfil() {
    this.navCtrl.push('GerentePerfilPage');
  }
  logout() {
    this.auth.logout();
    //localStorage.clear();//limpa se foi gravado no storage
    this.navCtrl.setRoot(LoginPage);//volta pra pagina inicial
    //this.navCtrl.push('LogoutPage');
    //alert("This is logout");
  }
  openMantenedorPage() {
    this.navCtrl.push('MantenedorPage');
  }

}
