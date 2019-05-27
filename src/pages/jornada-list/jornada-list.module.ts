import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JornadaListPage } from './jornada-list';

@NgModule({
  declarations: [
    JornadaListPage,
  ],
  imports: [
    IonicPageModule.forChild(JornadaListPage),
  ],
})
export class JornadaListPageModule {}
