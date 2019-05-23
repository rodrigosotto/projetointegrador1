import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalJustificativasPage } from './modal-justificativas';

@NgModule({
  declarations: [
    ModalJustificativasPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalJustificativasPage),
  ],
})
export class ModalJustificativasPageModule {}
