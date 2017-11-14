import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {GeolocPageModule} from "../pages/geoloc/geoloc.module";
import {Geolocation} from "@ionic-native/geolocation";
import {VibrationPageModule} from "../pages/vibration/vibration.module";
import {Vibration} from "@ionic-native/vibration";
import {ToastingPageModule} from "../pages/toasting/toasting.module";
import {Toast} from "@ionic-native/toast";
import {TextspeechPageModule} from "../pages/textspeech/textspeech.module";
import {TextToSpeech} from "@ionic-native/text-to-speech";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GeolocPageModule,
      VibrationPageModule,
      ToastingPageModule,
      TextspeechPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,

  ],
  providers: [
      TextToSpeech,
      Toast,
    Vibration,
    Geolocation,
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
