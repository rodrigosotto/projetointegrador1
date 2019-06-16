import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, ToastController } from 'ionic-angular';
 

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {

  user: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,) {
    this.user = this.navParams.data.user;
    console.log(this.user);
    
  }

  ionViewDidEnter() {
    /*this.users = [];
    this.page = 1;
    this.infiniteScroll.enable(true);
    this.getAllUsers(this.page);*/
  }
  voltarButton(){
    this.navCtrl.pop();
  }
 
}