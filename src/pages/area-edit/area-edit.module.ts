import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaEditPage } from './area-edit';

@NgModule({
  declarations: [
    AreaEditPage,
  ],
  imports: [
    IonicPageModule.forChild(AreaEditPage),
  ],
})
export class AreaEditPageModule {}
