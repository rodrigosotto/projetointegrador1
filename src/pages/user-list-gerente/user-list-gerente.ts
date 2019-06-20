import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users-providers/users-providers';

/**
 * Generated class for the UserListGerentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-list-gerente',
  templateUrl: 'user-list-gerente.html',
})
export class UserListGerentePage {


  users: any[];
  page: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private userProvider: UsersProvider,
    public alertCtrl: AlertController
    ) { }

  ionViewDidEnter() {
    this.users = [];
    this.page = 1;
    this.getAllUsers(1);
  }

  getAllUsers(page: number) {
    this.userProvider.getAll(page)
      .then((result: any) => {
        this.users= result.data;
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os usuários. Erro: ' + error.error.error,
         position: 'botton', duration: 3000 }).present();
      });
  }

  getUsers() {
    setTimeout(() => {
      this.page += 1;
      this.getAllUsers(this.page);
    }, 500);
  }

  openUser(user) {
    console.log("open user: ");
    console.log(user);
        this.navCtrl.push('UserDetailPage', { user });
  }


}
