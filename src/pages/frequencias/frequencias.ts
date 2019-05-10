import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, ToastController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users-providers/users-providers';


@IonicPage({})
@Component({
  selector: 'page-frequencias',
  templateUrl: 'frequencias.html',
})
export class FrequenciasPage {

  users: any[];
  page: number;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) { }

  ionViewDidEnter() {
    this.users = [];
    this.page = 1;
    this.infiniteScroll.enable(true);
    this.getAllUsers(this.page);
  }
  
  getAllUsers(page: number) {
    this.userProvider.getAll(page)
      .then((result: any) => {
        for (var i = 0; i < result.data.length; i++) {
          var user = result.data[i];
          this.users.push(user);
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.users.length == result.total) {
            this.infiniteScroll.enable(false);
          }
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os usuários. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }
  
  //infinite scroll
  getUsers() {
    setTimeout(() => {
      this.page += 1;
      this.getAllUsers(this.page);
    }, 500);
  }
  
  openUser(id: number) {
      this.userProvider.get(id)
        .then((result: any) => {
          this.navCtrl.push('UserDetailPage', { user: result.data });
        })
        .catch((error: any) => {
          this.toast.create({ message: 'Erro ao recuperar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
  
    }
         //funcao que pega a estrutura da pagina de detalhes do usuario! não sei.. penso em usar como estrutura para este tipo de chamada.
  openTabelaFrequencia(id: number) {
    this.userProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('TabelaFrequenciaPage', { user: result.data }); //defino que aqui tem que aparecer a pagina com a tabela de frequencias
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });

    }
  
}
