import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app: App;
  base64Image: string;

  constructor(public navCtrl: NavController, private camera: Camera) {
  this.app = new App("nom", 0.4);
  }
    /**Fonction qui nous permet de prendre une photo */
    takepic(){
          const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
   });

    }
}

/**************************** Sauvegarder notre photo dans la gallery**************************************************** */
/*this.base64ToGallery.base64ToGallery(base64Data, { prefix: '_img' }).then(
    res => console.log('Saved image to gallery ', res),
    err => console.log('Error saving image to gallery ', err)
);*/
/************************************************************************************************************************ */
class App {
constructor(public nom: String, public version: Number){

 }
}
