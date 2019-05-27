import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoDeJustificativaListPage } from './tipo-de-justificativa-list';

@NgModule({
  declarations: [
    TipoDeJustificativaListPage,
  ],
  imports: [
    IonicPageModule.forChild(TipoDeJustificativaListPage),
  ],
})
export class TipoDeJustificativaListPageModule {}
