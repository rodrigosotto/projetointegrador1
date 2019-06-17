//import { Area } from './../area-edit/area-edit';
import { AreasProvidersProvider } from '../../providers/areas-providers/areas-providers';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
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
    public areaProvider:AreasProvidersProvider,
    public alertCtrl: AlertController) {
     }
/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaListPage');
     
  }
*/
  ionViewWillEnter(){
    
    this.getAllAreas(); 
  }

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

  openEditArea(id:number) {
    console.log("openEditArea: ("+id+")");
    this.areaProvider.getAreas(id)
      .then((result: any) => {
        this.navCtrl.push('AreaEditPage', { area: result});
      })
      .catch((error: any) => {
        this.toast.create({ 
          message: 'Erro ao recuperar Area. Erro: ' + error.error, 
        position: 'botton', duration: 3000 }).present();
      });
  }

  deleteArea(areas: any){
    this.areaProvider.removeAreas(areas.id)
      .then((result: any) => {
        let index = this.listaAreas.indexOf(areas);
        this.listaAreas.splice(index, 1);

        this.toast.create({ message: 'Area excluída com sucesso.', 
        position: 'botton', duration: 3000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao excluir a Area. Erro: ' + error.error, 
        position: 'botton', 
        duration: 3000 }).present();
      });
  }
  confirmaExclusao(areas: any) { //mudar parametro para o nome que vc precisar
    //let retorno = false;
    let alert = this.alertCtrl.create({
      title: 'Confirma ação?',
      message: 'Esta ação não poderá ser desfeita!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Ação cancelada');

          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Ação confirmada');
            //ESSE Método é que precisa mudar para deleteUsuario, deleteFeriado, etc...
            this.deleteArea(areas);
          }
        }
      ]
    });
    alert.present();
  }


  openCreateArea(){
    this.navCtrl.push('AreaEditPage');
  }
}