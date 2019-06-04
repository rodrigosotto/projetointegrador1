import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class FeriadoProvider {

  private API_URL = 'http://localhost:8000/api/'


  constructor(public http: HttpClient) {}


  //metodos
  getAllFeriados(page: number) {
    return new Promise((resolve, reject) => {

      let url = this.API_URL + 'feriadoz';

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
//metodos
  getFeriados(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'feriadoz' + id;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
//metodos
  insertFeriados(feriado: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'feriadoz';

      this.http.post(url, feriado)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }

  updateFeriados(feriado: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'feriadoz' + feriado.id;
      let data = {
        "nome": feriado.nome,
        "data": feriado.data
      }

      this.http.put(url, feriado)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error);
        });
    });
  }

  removeFeriados(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'feriadoz' + id;

      this.http.delete(url)
        .subscribe((result: any) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
    });
  }
  

}
