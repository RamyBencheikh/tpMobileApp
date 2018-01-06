import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker} from '@ionic-native/google-maps';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
    map: GoogleMap;
    constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, public platform: Platform) {}

    ionViewDidLoad() {
        this.loadMap();
    }
     loadMap(){

        let mapOptions: GoogleMapOptions = {
            camera: {
                target: {
                    lat: 51.3838291,
                    lng: -0.5840443
                },
                zoom: 18,
                tilt: 30
            }
        };

        this.map = this.googleMaps.create('map_canvas', mapOptions);

        // Wait the MAP_READY before using any methods.
        this.map.one(GoogleMapsEvent.MAP_READY)
            .then(() => {
                console.log('Map is ready!');

                // Now you can use all methods safely.
                this.map.addMarker({
                    title: 'Ionic',
                    icon: 'blue',
                    animation: 'DROP',
                    position: {
                        lat: 51.3838291,
                        lng: -0.5840443
                    }
                })
                    .then(marker => {
                        marker.on(GoogleMapsEvent.MARKER_CLICK)
                            .subscribe(() => {
                                alert('clicked');
                            });
                    });

            });
    };

}
