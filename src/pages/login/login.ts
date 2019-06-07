import { UsersProvider } from './../../providers/users-providers/users-providers';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MantenedorPage } from '../mantenedor-page/mantenedor';
import { UsuarioPage } from '../usuario/usuario';

import { GlobalProvider } from '../../providers/global/global';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider,
    private global: GlobalProvider, private auth: AuthProvider)
  {
    this.model = new User();
    this.model.email = 'jefferson@jefferson';
    this.model.password = '123456';
  }

  openHome(){
    this.navCtrl.push(HomePage, {}, {animate: true} );
  }
  openUsuarioPage(){
    this.navCtrl.push(UsuarioPage, {}, {animate: true} );
  }

 /**VERIFICA SE O USUARIO EXISTE NA API GRAVA O TOKEN PARA FUTURAS REQUISIÇÕES E SE EXISTE O USER ELE LOGA NO SISTEMA */
  login() {
    this.auth.login(this.model.email, this.model.password)
    //this.userProvider.login(this.model.email, this.model.password)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário logado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();
        //chamar a funcao que grava o token no storage

        //this.navCtrl.push(MantenedorPage, {}, {animate: true} );

        this.openUserHome();

        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot()
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao efetuar login.', position: 'botton', duration: 3000 }).present();
        console.log("Login error: "+error);
      });
      /*this.auth.login(this.model.email, this.model.password);
      if (this.auth.isAuthenticated){
        this.toast.create({ message: 'Usuário logado com sucesso. Token: ' + , position: 'botton', duration: 3000 }).present();
      } else{

      }*/

  }

  openUserHome(){
    this.auth.getUser().then( (user: any)=>{
      console.log("user: "+user.email);
      console.log("tipoUsuarioId: "+user.tipoUsuario.id);
      switch(user.tipoUsuario.id){
      case 1:
        this.navCtrl.push(UsuarioPage, {}, {animate: true} );
        break;
      case 2:
        this.navCtrl.push(HomePage, {}, {animate: true} );
        break;
      case 3:
        this.navCtrl.push(MantenedorPage, {}, {animate: true} );
        break;
    }
    });


  }


  ionViewDidEnter(){
    //this.toast.create({ message: this.global.API_URL, duration: 3000 }).present();
  }



}



export class User {
  email: string;
  password: string;
}
