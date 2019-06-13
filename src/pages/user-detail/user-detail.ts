import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users-providers/users-providers';


@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {

  users: any;
  page: number;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private userProvider: UsersProvider) {

    this.users = this.navParams.data.user;
  }
  voltarButton(){
    this.navCtrl.push('UserListPage');
  }
  
}