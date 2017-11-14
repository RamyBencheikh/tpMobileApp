import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

/**
 * Generated class for the TextspeechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-textspeech',
  templateUrl: 'textspeech.html',
})
export class TextspeechPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  }

  speek(){
      this.tts.speak('Hello World')
          .then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));
  }

}
