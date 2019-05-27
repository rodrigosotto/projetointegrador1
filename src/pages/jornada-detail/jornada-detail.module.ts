import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JornadaDetailPage } from './jornada-detail';

@NgModule({
  declarations: [
    JornadaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(JornadaDetailPage),
  ],
})
export class JornadaDetailPageModule {}
