import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiposDeOcorrenciasEditPage } from './tipos-de-ocorrencias-edit';

@NgModule({
  declarations: [
    TiposDeOcorrenciasEditPage,
  ],
  imports: [
    IonicPageModule.forChild(TiposDeOcorrenciasEditPage),
  ],
})
export class TiposDeOcorrenciasEditPageModule {}
