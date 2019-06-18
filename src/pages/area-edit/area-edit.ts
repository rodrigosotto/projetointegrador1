import { AreasProvidersProvider } from './../../providers/areas-providers/areas-providers';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';
import { UsersProvider } from './../../providers/users-providers/users-providers';

@IonicPage()
@Component({
  selector: 'page-area-edit',
  templateUrl: 'area-edit.html',
})
export class AreaEditPage {
  model: Area;
  users:any[];
  page: number;
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private areaProvider: AreasProvidersProvider,
    private userProvider: UsersProvider
    
  ) {
    if (this.navParams.data.area) {
      //console.log(this.navParams.data.feriado);
      this.model = this.navParams.data.area;
      console.log(this.model);
    } else {
      console.log("não achou area");
      this.model = new Area();
    }
  }


  getAllUsers(id) {
    this.userProvider.getAll(id)
      .then((result: any) => {
        for (var i = 0; i < result.data.length; i++) {
          var user = result.data[i];
          this.users.push(user);
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os usuários. Erro: ' + error.error.error, position: 'botton', duration: 3000 }).present();
      });
  }


  /*
  saveNewAreas() {
    this.saveAreas()
      .then(() => {
        this.toast.create({ message: 'Nova Area salva com sucesso.', position: 'botton', duration: 3000 }).present();
        //this.navCtrl.pop();
      })
      .catch((error) => {
        this.toast.create({ message: 'Erro ao salvar nova Area. Erro: ' + error.error.error, position: 'botton', duration: 3000 }).present();
      })
  }
  
  private saveAreas() {
    if (this.model.id) {
      return this.userProvider.update(this.model);
    } else {
      return this.userProvider.insert(this.model);
    }
  }
  */

 ionViewDidEnter() {
  this.users = [];
  this.getAllUsers(this.page);
}

 ionViewDidLoad() {
  console.log('ionViewDidLoad AreaEditPage');
  console.log(this.model);
}
  salvar() {
    this.salvarArea()
      .then(() => {
        this.toast.create({
          message: 'Area salva com sucesso.',
          position: 'botton', 
          duration: 2000
        }).present();
        this.navCtrl.pop();
        //this.navCtrl.push('AreaListPage');

      })
      .catch((error) => {
        console.log("Erro ao salvar Area:");
        console.log(error);
        this.toast.create({
          message: 'Erro ao salvar a Area. Erro: ' + error.error,
          position: 'botton', duration: 2000
        }).present();
      })
  }
  private salvarArea() {
    if (this.model.id) {
      return this.areaProvider.updateAreas(this.model);
    } else {
      return this.areaProvider.insertAreas(this.model);
    }

  }
}

export class Area {
  id: number;
  nome: String;

}
