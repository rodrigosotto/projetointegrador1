import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users-providers/users-providers';

/**
 * Generated class for the JornadaEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jornada-edit',
  templateUrl: 'jornada-edit.html',
})
export class JornadaEditPage {

  model:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {

      if (this.navParams.data.saveJornadas) {
        this.model = this.navParams.data.saveJornadas;
        
      } else {
        this.model = new this.saveNewJornadas;
      }
  }
  saveNewJornadas() {
    this.saveJornadas()
      .then(() => {
        this.toast.create({ message: 'Nova jornada salva com sucesso.', position: 'botton', duration: 3000 }).present();
        this.navCtrl.pop();
      })
      .catch((error) => {
        this.toast.create({ message: 'Erro ao salvar nova jornada. Erro: ' + error.error.error, position: 'botton', duration: 3000 }).present();
      })
  }

  private saveJornadas() {
    if (this.model.id) {
      return this.userProvider.update(this.model);
    } else {
      return this.userProvider.insert(this.model);
    }
  }
}
