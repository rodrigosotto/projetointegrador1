import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiposOcorrenciaListPage } from './tipos-ocorrencia-list';

@NgModule({
  declarations: [
    TiposOcorrenciaListPage,
  ],
  imports: [
    IonicPageModule.forChild(TiposOcorrenciaListPage),
  ],
})
export class TiposOcorrenciaListPageModule {}
