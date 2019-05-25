import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaPage } from './area';

@NgModule({
  declarations: [
    AreaPage,
  ],
  imports: [
    IonicPageModule.forChild(AreaPage),
  ],
})
export class AreaPageModule {}
