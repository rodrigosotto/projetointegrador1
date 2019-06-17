import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendenciasGerentePage } from './pendencias-gerente';

@NgModule({
  declarations: [
    PendenciasGerentePage,
  ],
  imports: [
    IonicPageModule.forChild(PendenciasGerentePage),
  ],
})
export class PendenciasGerentePageModule {}
