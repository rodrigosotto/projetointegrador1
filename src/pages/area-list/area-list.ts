import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users-providers/users-providers';


/**
 * Generated class for the AreaListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-area-list',
  templateUrl: 'area-list.html',
})
export class AreaListPage {

  page:number;
  model: any;
 
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaListPage');
  }

  openEditArea(id: number) {
    this.userProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('AreaEditPage', { area: result.data });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar area. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }


  deleteArea(deleteArea:any){
    this.userProvider.remove(deleteArea.id)
      .then((result: any) => {
        let index = this.deleteArea;
        this.deleteArea(1);

        this.toast.create({ message: 'Area excluída com sucesso.', position: 'botton', 
        duration: 3000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao excluir a Area. Erro: ' + error.error.error, position: 'botton', 
        duration: 3000 }).present();
      });
  }

  openCreateArea(){
    this.navCtrl.push('AreaEditPage');
  }

   
}
