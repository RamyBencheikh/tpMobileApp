import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
    MediaCapture, MediaFile, CaptureError, CaptureImageOptions,
    CaptureVideoOptions
} from '@ionic-native/media-capture';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaCapture: MediaCapture) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }
    TakeVideo(){

        let options: CaptureVideoOptions = { limit: 1 };
        this.mediaCapture.captureVideo(options)
            .then(
                (data: MediaFile[]) => console.log(data),
                (err: CaptureError) => console.error(err)
            );


    }
}

