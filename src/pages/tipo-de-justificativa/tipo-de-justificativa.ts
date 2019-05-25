import { UsersProvider } from './../../providers/users-providers/users-providers';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tipo-de-justificativa',
  templateUrl: 'tipo-de-justificativa.html',
})
export class TipoDeJustificativaPage {

  model:TipoDeJustificativa;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private toast: ToastController, 
    private userProvider: UsersProvider 
    ) {
    if (this.navParams.data.TipoDeJustificativa) {
      this.model = this.navParams.data.TipoDeJustificativa;
    } else {
      this.model = new TipoDeJustificativa();
    }
  }
  
/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad TipoDeJustificativaPage');
  }
  */
  saveTipoDeJustificativas() {
    this.saveTipoDeJustificativa()
      .then(() => {
        this.toast.create({ message: 'Justificativa salva com sucesso.', 
        position: 'botton', duration: 3000 }).present();
       // this.navCtrl.pop();
      })
      .catch((error) => {
        this.toast.create({ message: 'Erro ao salvar. Erro: ' + error.error.error,
         position: 'botton', duration: 3000 }).present();
      })
  }

  private saveTipoDeJustificativa() {
    if (this.model.id) {
      return this.userProvider.update(this.model);
    } else {
      return this.userProvider.insert(this.model);
     }
    }
  }
  export class TipoDeJustificativa {
    id: number;
    nome: string;
    codigo: string;
  }
 




