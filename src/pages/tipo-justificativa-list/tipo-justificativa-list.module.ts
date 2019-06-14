import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoJustificativaListPage } from './tipo-justificativa-list';

@NgModule({
  declarations: [
    TipoJustificativaListPage,
  ],
  imports: [
    IonicPageModule.forChild(TipoJustificativaListPage),
  ],
})
export class TipoJustificativaListPageModule {}
