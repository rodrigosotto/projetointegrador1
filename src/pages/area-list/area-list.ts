import { AreasProvidersProvider } from '../../providers/areas-providers/areas-providers';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
//import { UsersProvider } from '../../providers/users-providers/users-providers';


@IonicPage()
@Component({
  selector: 'page-area-list',
  templateUrl: 'area-list.html',
})
export class AreaListPage {

  listaAreas: any[];
 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController, 
    public areaProvider:AreasProvidersProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaListPage');
    this.getAllAreas();
    console.log("areas: "+this.listaAreas);
  }

  getAllAreas() {
    this.areaProvider.getAllAreas()
      .then((result: any) => {
        this.listaAreas = result;
        console.log("areas: "+this.listaAreas);
        /*for (var i = 0; i < result.data.length; i++) {
          var user = result.data[i];
          this.users.push(user);
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.users.length == result.total) {
            this.infiniteScroll.enable(false);
          }
        }*/
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar Areas. Erro: ' + error.error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  openEditArea(nome) {
    this.areaProvider.getAreas(nome)
      .then((result: any) => {
        this.navCtrl.push('AreaEditPage', { area: result.data });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar area. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }


  deleteArea(deleteArea:any){
    this.areaProvider.removeAreas(deleteArea.id)
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
