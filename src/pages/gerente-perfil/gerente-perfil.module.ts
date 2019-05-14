import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GerentePerfilPage } from './gerente-perfil';

@NgModule({
  declarations: [
    GerentePerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(GerentePerfilPage),
  ],
})
export class GerentePerfilPageModule {}
