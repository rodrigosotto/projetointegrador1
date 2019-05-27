import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaListPage } from './area-list';

@NgModule({
  declarations: [
    AreaListPage,
  ],
  imports: [
    IonicPageModule.forChild(AreaListPage),
  ],
})
export class AreaListPageModule {}
