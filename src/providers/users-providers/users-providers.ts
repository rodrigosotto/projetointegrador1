import { GlobalProvider } from './../global/global';
import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
//import { JwtInterceptor} from '@auth0/angular-jwt'; //nao precisa...


@Injectable()
export class UsersProvider {
 //private API_URL = 'https://reqres.in/api/'
 //private API_URL = 'http://localhost:8000/api/'
//private API_URL = 'https://jsonplaceholder.typicode.com/users'
private url;

  constructor(public http: HttpClient, public global: GlobalProvider) {
    this.url = this.global.API_URL+'users/';
   }


  /*login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        email: email,
        password: password
      };

      this.http.post(this.API_URL + 'login', data)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }*/
//metodos
  getAll(page: number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
//metodos
  get(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url+id).subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
//metodos
  insert(user: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, user).subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }

  update(user: any) {
    return new Promise((resolve, reject) => {
      let data = {
        "nome": user.nome,
        "matricula": user.matricula,
        "email": user.email,//acredito que vai todos da tabela users
      }

      this.http.put(this.url+user.id, user).subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }

  remove(id: number) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url+id).subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }

}
