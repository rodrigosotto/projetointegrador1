import { GlobalProvider } from './../global/global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class FeriadoProvider {

  //private API_URL = 'http://localhost:8000/api/'
  private url;


  constructor(public http: HttpClient, public global: GlobalProvider) {
    this.url = this.global.API_URL+'feriados/';
  }


  //metodos
  getAllFeriados() {
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
  getFeriado(id: number) {
    return new Promise((resolve, reject) => {
     this.http.get(this.url+id)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
//metodos
  insertFeriado(feriado: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, feriado).subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }

  updateFeriado(feriado: any) {
    return new Promise((resolve, reject) => {
      let data = {
        "nome": feriado.nome,
        "data": feriado.data
      }

      this.http.put(this.url+feriado.id, feriado).subscribe((result: any) => {
          //resolve(result.json());
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }

  removeFeriado(id: number) {
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
