import { GlobalProvider } from './../global/global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the JornadaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JornadaProvider {
  //private API_URL = 'http://localhost:8000/api/'

  private url;


  constructor(
    public http: HttpClient, 
    public global: GlobalProvider) {
    this.url = this.global.API_URL + 'jornadas/';
  }
  //metodos
  getAllJornadas() {
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
  getJornada(nome: any) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + nome)
        .subscribe((result: any) => {
          resolve(result);
        },
          (error) => {
            reject(error);
          });
    });
  }
  //metodos
  insertJornada(jornada: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, jornada).subscribe((result: any) => {
        resolve(result);
      },
        (error) => {
          reject(error);
        });
    });
  }

  updateJornada(jornada: any) {
    //{"id":1,"nome":"Turno manh\u00e3","entrada":"08:00:00","saida":"12:00:00"}
    return new Promise((resolve, reject) => {
      let data = {
        "nome": jornada.nome,
        "entrada": jornada.entrada,
        "saida": jornada.saida
      }

      this.http.put(this.url + jornada.id, jornada).subscribe((result: any) => {
        resolve(result);
      },
        (error) => {
          reject(error);
        });
    });
  }

  removeJornada(id: number) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url + id).subscribe((result: any) => {
        resolve(result);
      },
        (error) => {
          reject(error);
        });
    });
  }


}
