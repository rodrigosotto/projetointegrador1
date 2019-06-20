import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserListGerentePage } from './user-list-gerente';

@NgModule({
  declarations: [
    UserListGerentePage,
  ],
  imports: [
    IonicPageModule.forChild(UserListGerentePage),
  ],
})
export class UserListGerentePageModule {}
