import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserListMantenedorPage } from './user-list-mantenedor';

@NgModule({
  declarations: [
    UserListMantenedorPage,
  ],
  imports: [
    IonicPageModule.forChild(UserListMantenedorPage),
  ],
})
export class UserListMantenedorPageModule {}
