import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app: any = { nom: String, version: Number};

  constructor(public navCtrl: NavController) {
    this.app.nom = "Nom App";
    this.app.version = 0.2;
  }

}
class App {
constructor(public nom: String, public version: Number){

 }
}
