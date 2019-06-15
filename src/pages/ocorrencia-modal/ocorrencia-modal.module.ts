import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OcorrenciaModalPage } from './ocorrencia-modal';

@NgModule({
  declarations: [
    OcorrenciaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(OcorrenciaModalPage),
  ],
})
export class OcorrenciaModalPageModule {}
