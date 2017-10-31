import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app: App;

  constructor(public navCtrl: NavController) {
  this.app = new App("nom", 0.4);
  }
   change(){
    console.log("COUCOU");
  }
}
class App {
constructor(public nom: String, public version: Number){

 }
}
