import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {HttpClientModule } from '@angular/common/http';
import { UsersProvider } from '../providers/users-providers/users-providers';
import { LoginPage } from '../pages/login/login';
import { ModalJustificativasPage } from '../pages/modal-justificativas/modal-justificativas';
import { FeriadoProvider } from '../providers/feriado/feriado';
//import { MantenedorPage } from '../pages/mantenedor-page/mantenedor'; 


 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ModalJustificativasPage
    
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ModalJustificativasPage
     
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    FeriadoProvider,
    FeriadoProvider,
    FeriadoProvider,
    
  ]
})
export class AppModule {}