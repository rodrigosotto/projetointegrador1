import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JornadaPage } from './jornada';

@NgModule({
  declarations: [
    JornadaPage,
  ],
  imports: [
    IonicPageModule.forChild(JornadaPage),
  ],
})
export class JornadaPageModule {}
