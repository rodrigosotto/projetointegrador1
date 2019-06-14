 import { GlobalProvider } from './../global/global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TipoJustificativaProvider {
  //variavel que contem a url da api
  private url;

  constructor(
    public http: HttpClient,
    public global: GlobalProvider)
     {
      this.url = this.global.API_URL + 'tiposJustificativa/'
  
   }
   //metodo que lista todos os tipos de justificativas
   getAllTipoJustificativas() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe((result: any) => {
        resolve(result);
      },
        (error) => {
          reject(error);
        });
    });
  }

  //metodo busca tipo de justificativa
   
  getTipoJustificativa(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + id)
        .subscribe((result: any) => {
          resolve(result);
        },
          (error) => {
            reject(error);
          });
    });
  }
    //metodo que insere um tipo de justificativa
insertTipoJustificativa(tipoJustificativa: any) {
  return new Promise((resolve, reject) => {
    this.http.post(this.url, tipoJustificativa).subscribe((result: any) => {
      resolve(result);
    },
      (error) => {
        reject(error);
      });
  });
}

//metodo para editar o tipo de justificativa
updateTipoJustificativa(tipoJustificativa: any) {
  return new Promise((resolve, reject) => {
    let data = {
      "nome": tipoJustificativa.nome,
      "codigo": tipoJustificativa.codigo
    }
    this.http.put(this.url + tipoJustificativa.id, 
      tipoJustificativa).subscribe((result: any) => {
      //resolve(result.json());
      resolve(result);
    },
      (error) => {
        reject(error);
      });
  });
}

//metodo que remove o tipo de justificativa
removeTipoJustificativa(id: number) {
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

 