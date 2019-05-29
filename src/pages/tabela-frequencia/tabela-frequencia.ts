import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, InfiniteScroll } from 'ionic-angular';
import { UsersProvider } from '../../providers/users-providers/users-providers';
 

/**
 * Generated class for the TabelaFrequenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabela-frequencia',
  templateUrl: 'tabela-frequencia.html',
})
export class TabelaFrequenciaPage {

  users: any[];
  page: number;
  lista: any[];
  
   
  
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) { }

  ionViewDidEnter() {
    this.users = [];
    this.page = 1;
    this.infiniteScroll.enable(true);
     
     
     
   // this.infiniteScroll.enable(true);
    //this.get(this.page);
    this.lista=[
      
      { dia:'01',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  }, 
      { dia:'02',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'03',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'04',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  }, 
      { dia:'05',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'06',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'07',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  }, 
      { dia:'08',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'09',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'10',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  }, 
      { dia:'11',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'12',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'13',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  }, 
      { dia:'14',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'15',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'16',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  }, 
      { dia:'17',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'18',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'19',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  }, 
      { dia:'20',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'21',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'22',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  }, 
      { dia:'23',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'24',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'25',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  }, 
      { dia:'26',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'27',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'28',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  }, 
      { dia:'29',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  },
      { dia:'30',hora:'07:00 ás 12:00 / 14:00 ás 18:00'  }
    
    ];
  }

  //adaptar as funcoes de acordo com as suas necessidades.. aqui neste caso precisamos adaptar para retornar uma lista de frequencia.
  //verificar como sera feito isso com o grupo!! (ou com o fabricio kkkk)
  getUsers() {
    setTimeout(() => {
      this.page += 1;
      this.getAllUsers(this.page);
    }, 500);
  }
  getAllUsers(page: number) {
    this.userProvider.getAll(page)
      .then((result: any) => {
        for (var i = 0; i < result.data.length; i++) {
          var user = result.data[i];
          //this.users.push(user);
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
}
