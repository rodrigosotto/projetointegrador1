import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MantenedorPage } from './mantenedor';

@NgModule({
  declarations: [
    MantenedorPage,
  ],
  imports: [
    IonicPageModule.forChild(MantenedorPage),
  ],
})
export class MantenedorPageModule {}
