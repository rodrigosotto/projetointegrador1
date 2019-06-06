//https://devdactic.com/jwt-authentication-ionic/
//https://github.com/auth0/angular2-jwt/tree/v1


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { Platform, AlertController } from '@ionic/angular';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';


const TOKEN_KEY = 'access_token';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  url = null;
  user = null;
  statusAutenticacao = false;

  constructor(public http: HttpClient, public helper: JwtHelperService, public storage: Storage,
  /*public plt: Platform, public alertController: AlertController*/  ) {
    //console.log('Hello AuthProvider Provider');
    //this.plt.ready().then(() =>{ //Platform tá dando problemas... parece que é do Ionic 4
      this.checkToken();
    //});
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);

        if (!isExpired) {
          this.user = decoded.user;
          this.statusAutenticacao = true; // this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }



}
