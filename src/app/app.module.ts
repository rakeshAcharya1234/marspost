import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { UserpostsPage } from '../pages/userposts/userposts';
import { OtherpostsPage } from '../pages/otherposts/otherposts';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AddpostPage } from '../pages/addpost/addpost';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    UserpostsPage,
    OtherpostsPage,
    TabsPage,
    LoginPage,
    AddpostPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserpostsPage,
    OtherpostsPage,
    TabsPage,
    LoginPage,
    AddpostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
