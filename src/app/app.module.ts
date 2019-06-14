import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpClientModule } from '@angular/common/http';
import { UsersProvider } from '../providers/users-providers/users-providers';
import { LoginPage } from '../pages/login/login';
import { ModalJustificativasPage } from '../pages/modal-justificativas/modal-justificativas';
import { FeriadoProvider } from '../providers/feriado/feriado';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { MantenedorPage } from '../pages/mantenedor-page/mantenedor';
import { UsuarioPage } from '../pages/usuario/usuario';
import { AuthProvider } from '../providers/auth/auth';

import { Storage, IonicStorageModule } from '@ionic/storage';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { GlobalProvider } from '../providers/global/global';
import { JornadaProvider } from '../providers/jornada/jornada';
import { AreasProvidersProvider } from '../providers/areas-providers/areas-providers';
import { FrequenciaProvider } from '../providers/frequencia/frequencia';
import { TipoJustificativaProvider } from '../providers/tipo-justificativa/tipo-justificativa';


export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whitelistedDomains: ['localhost:8000']
  }
}


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ModalJustificativasPage,
    MantenedorPage,
    HomePage,
    UsuarioPage,



  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage],
      }
    }),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ModalJustificativasPage,
    MantenedorPage,
    HomePage,
    UsuarioPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    FeriadoProvider,
    AuthServiceProvider,
    AuthProvider,
    GlobalProvider,
    JornadaProvider,
    AreasProvidersProvider,
    FrequenciaProvider,
    TipoJustificativaProvider,

  ]
})
export class AppModule {}
