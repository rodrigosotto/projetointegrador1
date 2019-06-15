 import { GlobalProvider } from './../global/global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TipoOcorrenciaProvider {
  //variavel que contem a url da api
  private url;

  constructor(
    public http: HttpClient,
    public global: GlobalProvider)
     {
      this.url = this.global.API_URL + 'tiposOcorrencia/'
  
   }
   //metodo que lista todos os tipos de ocorrencias
   getAllTipoOcorrencias() {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe((result: any) => {
        resolve(result);
      },
        (error) => {
          reject(error);
        });
    });
  }

  //metodo busca tipo de ocorrencias
   
  getTipoOcorrencia(id: number) {
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
    //metodo que insere um tipo de ocorrencias
insertTipoOcorrencia(tipoOcorrencia: any) {
  return new Promise((resolve, reject) => {
    this.http.post(this.url, tipoOcorrencia)
    .subscribe((result: any) => {
      resolve(result);
    },
      (error) => {
        reject(error);
      });
  });
}

//metodo para editar o tipo de ocorrencia
updateTipoOcorrencia(tipoOcorrencia: any) {
  return new Promise((resolve, reject) => {
    let data = {
      "nome": tipoOcorrencia.nome,
      "codigo": tipoOcorrencia.codigo
    }
    this.http.put(this.url + tipoOcorrencia.id, 
      tipoOcorrencia).subscribe((result: any) => {
      //resolve(result.json());
      resolve(result);
    },
      (error) => {
        reject(error);
      });
  });
}

//metodo que remove o tipo de ocorrencia
removeTipoOcorrencia(id: number) {
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

 