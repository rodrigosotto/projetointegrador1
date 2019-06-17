import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalProvider } from '../global/global';

/*
  Generated class for the JustificativaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JustificativaProvider {
  private url: string;

  constructor(public http: HttpClient, public global: GlobalProvider) {
    this.url = this.global.API_URL;
  }

  salvarJustificativa(justificativa: any){
    return this.http.post(this.url+'justificarOcorrencia', justificativa);
    /* if(justificativa.id){
      //atualizar justificativa
      return this.http.put(this.url+justificativa.id,justificativa);
    } else {
      return this.http.post(this.url, justificativa);
    } */

  }

}
