import { AuthProvider } from './../../providers/auth/auth';
import { UsersProvider } from './../../providers/users-providers/users-providers';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EmailValidator } from '@angular/forms';
import { AreasProvidersProvider } from '../../providers/areas-providers/areas-providers';

@IonicPage()
@Component({
  selector: 'page-user-edit',
  templateUrl: 'user-edit.html',
})
export class UserEditPage {

  model: User;
  listaAreas: any[];
  


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private userProvider: UsersProvider, 
    private areaProvider:AreasProvidersProvider) {

    if (this.navParams.data.user) {
      this.model = this.navParams.data.user;
    } else {
      this.model = new User();
    }
    this.getAllAreas();
  }

  /*metodo para buscar todas as areas no editar*/

  getAllAreas() {
    this.areaProvider.getAllAreas()
      .then((result: any) => {
        this.listaAreas = result;
        console.log("areas: "+this.listaAreas);
         

        /*for (var i = 0; i < result.data.length; i++) {
          var user = result.data[i];
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.users.length == result.total) {
            this.infiniteScroll.enable(false);
          }
        }*/
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar Areas. Erro: ' + error,
        position: 'botton', duration: 3000 }).present();
      });
  }


  save() {
    this.saveUser()
      .then(() => {
        this.toast.create({ message: 'Usuário salvo com sucesso.',
        position: 'botton', duration: 3000 }).present();
        this.navCtrl.pop();
      })
      .catch((error) => {
        this.toast.create({ message: 'Erro ao salvar o usuário. Erro: ' + error.error.error, position: 'botton',
         duration: 3000 }).present();
      })
  }

  private saveUser() {
    if (this.model.id) {
      return this.userProvider.update(this.model);
    } else {
      return this.userProvider.insert(this.model);
    }
  }

}

export class User {
  id: number;
  login: string;
  nome: string;
  email:EmailValidator;
  password:any;
  matricula:number;
  cartao:number;
  /*tipoUsuario: {
    id: number;
    nome: string;
  };*/
  tipo_usuario_id: number;
  area_id: number;

}
