import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiposDeOcorrenciasListPage } from './tipos-de-ocorrencias-list';

@NgModule({
  declarations: [
    TiposDeOcorrenciasListPage,
  ],
  imports: [
    IonicPageModule.forChild(TiposDeOcorrenciasListPage),
  ],
})
export class TiposDeOcorrenciasListPageModule {}
