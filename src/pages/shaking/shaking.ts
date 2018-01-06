import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Shake } from '@ionic-native/shake';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the ShakingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shaking',
  templateUrl: 'shaking.html',
})
export class ShakingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private shake: Shake, private toast: Toast) {

  }




  }
