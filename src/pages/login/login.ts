import { UsersProvider } from './../../providers/users-providers/users-providers';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MantenedorPage } from '../mantenedor-page/mantenedor';
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) {
    this.model = new User();
    this.model.email = 'jefferson@jefferson';
    this.model.password = '123456';
  }
  /*
  openHome(){
    this.navCtrl.push(HomePage, {}, {animate: true} );    
  }
  */
 /**VERIFICA SE O USUARIO EXISTE NA API GRAVA O TOKEN PARA FUTURAS REQUISIÇÕES E SE EXISTE O USER ELE LOGA NO SISTEMA */
  login() {
    this.userProvider.login(this.model.email, this.model.password)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário logado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();
        //chamar a funcao que grava o token no storage
        this.navCtrl.push(MantenedorPage, {}, {animate: true} );    

        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot()
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar login. Erro: ' + error.error.error, position: 'botton', duration: 3000 }).present();
      });
  }
  
}

export class User {
  email: string;
  password: string;
}