import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GerentePerfilPage } from '../gerente-perfil/gerente-perfil';
import { LoginPage } from '../login/login';
import { LogoutPage } from '../logout/logout';
import { MantenedorPage } from '../mantenedor-page/mantenedor'; 
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  openCreateAccount() {
    this.navCtrl.push('CreateAccountPage');
  }
/*
  openLogin() {
    this.navCtrl.push('LoginPage');
  }*/

  openListUsers() {
    this.navCtrl.push('UserListPage');
  }
  
  openFrequencias() {
    this.navCtrl.push('FrequenciasPage');
  }
  openTabelaFrequencias() {
    this.navCtrl.push('TabelaFrequenciasPage');
  }
  openGerentePerfil(){
    this.navCtrl.push ('GerentePerfilPage' );
  }
  logout(){
     localStorage.clear();//limpa se foi gravado no storage 
     this.navCtrl.setRoot(LoginPage);//volta pra pagina inicial
    //this.navCtrl.push('LogoutPage');
    //alert("This is logout");
  }
  openMantenedorPage(){
    this.navCtrl.push ('MantenedorPage' );
  }

}