import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users-providers/users-providers';


@IonicPage()
@Component({
  selector: 'page-area-edit',
  templateUrl: 'area-edit.html',
})
export class AreaEditPage {
  model: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {

      
  }

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
}
