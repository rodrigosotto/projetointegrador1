import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeriadoListPage } from './feriado-list';

@NgModule({
  declarations: [
    FeriadoListPage,
  ],
  imports: [
    IonicPageModule.forChild(FeriadoListPage),
  ],
})
export class FeriadoListPageModule {}
