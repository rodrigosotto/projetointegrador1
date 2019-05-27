import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JornadaEditPage } from './jornada-edit';

@NgModule({
  declarations: [
    JornadaEditPage,
  ],
  imports: [
    IonicPageModule.forChild(JornadaEditPage),
  ],
})
export class JornadaEditPageModule {}
