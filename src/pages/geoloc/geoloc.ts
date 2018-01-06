import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the GeolocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/* class location{
 contructor (public lat:number=0, public: long:number=0)
}*/

@IonicPage()
@Component({
    selector: 'page-geoloc',
    templateUrl: 'geoloc.html',
})
export class GeolocPage {

    public currentLat: Number;
    public currentLong: Number;
    public latitude:Number;
    public longitude:Number;

    constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation,) {
        this.currentPos();
        this.showGPS();
    }


    currentPos(){
        this.geolocation.getCurrentPosition().then((resp) => {
            this.currentLat = resp.coords.latitude;
            this.currentLong = resp.coords.longitude;
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    positionArray = new Array();
    showGPS(){
        let watch = this.geolocation.watchPosition();
        watch.subscribe((data) => {
            // data can be a set of coordinates, or an error (if an error occurred).
            this.latitude = data.coords.latitude;
            this.longitude = data.coords.longitude;
            this.latitude.push(this.positionArray); /* TODO: faire les push dans le tableau */
            
        });

    }
};