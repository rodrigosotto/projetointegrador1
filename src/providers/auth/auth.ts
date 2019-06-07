//https://devdactic.com/jwt-authentication-ionic/
//https://github.com/auth0/angular2-jwt/tree/v1


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { Platform, AlertController } from '@ionic/angular';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { GlobalProvider } from '../global/global';


const TOKEN_KEY = 'access_token';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  url = null;
  decodedToken = null;
  user = null;
  statusAutenticacao = false;

  constructor(public http: HttpClient, public helper: JwtHelperService,
    public storage: Storage, private global : GlobalProvider
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

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: password
      };

      this.http.post(this.global.API_URL + 'login', data)
        .subscribe((result: any) => {
          console.log("teste");
          this.storage.set(TOKEN_KEY, result['token']);
          this.decodedToken = this.helper.decodeToken(result['token']);
          this.storage.set('user', this.decodedToken.user);
          //this.authenticationState.next(true);
          this.statusAutenticacao = true;
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }

  getUser(){
    if(this.statusAutenticacao){
      return this.storage.get('user');
    }
    return null;
  }




  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      //this.authenticationState.next(false);
      this.statusAutenticacao = false;
    });
  }

  getSpecialData() {
    return this.http.get(`${this.url}/api/special`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          //this.showAlert('You are not authorized for this!');
          console.log('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }

  isAuthenticated() {
    //return this.authenticationState.value;
    return this.statusAutenticacao;
  }
 /*
  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }*/

}
