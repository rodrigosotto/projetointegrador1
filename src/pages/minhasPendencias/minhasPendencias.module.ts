import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {MinhasPendenciasPage} from '../minhasPendencias/minhasPendencias'
 
@NgModule({
  
  declarations: [
    MinhasPendenciasPage
  ],
  
  imports: [
    IonicPageModule.forChild(MinhasPendenciasPage),
  ],
})
export class PendenciasPageModule {}
