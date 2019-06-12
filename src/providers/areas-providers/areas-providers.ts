import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from '../global/global';


@Injectable()
export class AreasProvidersProvider {
  private url;

  constructor(
    public http: HttpClient,
    public global: GlobalProvider) {
    this.url = this.global.API_URL + 'areas/';
  }

  getAllAreas() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe((result: any) => {
        resolve(result);
      },
        (error) => {
          reject(error);
        });
    });
  }

  getAreas(nome: any) {
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
  insertAreas(areas: any) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, areas).subscribe((result: any) => {
        resolve(result);
      },
        (error) => {
          reject(error);
        });
    });
  }

  updateAreas(areas: any) {
    return new Promise((resolve, reject) => {
      let setor = {
        "nome": areas.nome,
      }
      this.http.put(this.url + areas.id, areas).subscribe((result: any) => {
        //resolve(result.json());
        resolve(result);
      },
        (error) => {
          reject(error);
        });
    });
  }

  removeAreas(id: number) {
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
