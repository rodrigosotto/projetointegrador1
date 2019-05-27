import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users-providers/users-providers';

@IonicPage()
@Component({
  selector: 'page-tipo-justificativa-edit',
  templateUrl: 'tipo-justificativa-edit.html',
})
export class TipoJustificativaEditPage {
  model: TipoJustificativa;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private toast: ToastController, private userProvider: UsersProvider ) 
    {
    if (this.navParams.data.TipoJustificativa) {
      this.model = this.navParams.data.TipoJustificativa;
    } else {
      this.model = new TipoJustificativa();
    }
  }

 
 //metodo para salvar todas as justificativas

saveTiposJustificativas() {
  this.saveTiposDeJustificativas()
    .then(() => {
      this.toast.create({ message: 'Tipo de Justificativa salva com sucesso.', position: 'botton', duration: 3000 }).present();
      //this.navCtrl.pop();
    })
    .catch((error) => {
      this.toast.create({ message: 'Erro ao salvar o Tipo de Justificativa. Erro: ' + error.error.error, position: 'botton', duration: 3000 }).present();
    })
}

private saveTiposDeJustificativas() {
  if (this.model.id) {
    return this.userProvider.update(this.model);
  } else {
    return this.userProvider.insert(this.model);
   }
  }
}
 
export class TipoJustificativa {
  id: number;
  first_name: string;
  last_name: string;
}

