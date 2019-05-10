import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrequenciasPage } from './frequencias';

@NgModule({
  
  declarations: [
    FrequenciasPage,
  ],
  
  imports: [
    IonicPageModule.forChild(FrequenciasPage),
  ],
})
export class FrequenciasPageModule {}
