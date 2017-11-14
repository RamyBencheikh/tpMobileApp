import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the ToastingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toasting',
  templateUrl: 'toasting.html',
})
export class ToastingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: Toast) {
  }

  notificate(){
      this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
          toast => {
              console.log(toast);
          }
      );
  }

}


