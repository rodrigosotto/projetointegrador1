import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoDeOcorrenciaPage } from './tipo-de-ocorrencia';

@NgModule({
  declarations: [
    TipoDeOcorrenciaPage,
  ],
  imports: [
    IonicPageModule.forChild(TipoDeOcorrenciaPage),
  ],
})
export class TipoDeOcorrenciaPageModule {}
