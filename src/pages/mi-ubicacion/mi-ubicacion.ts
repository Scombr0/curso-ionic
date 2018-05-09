import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MiUbicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'mi-ubicacion'
})
@Component({
  selector: 'page-mi-ubicacion',
  templateUrl: 'mi-ubicacion.html',
})
export class MiUbicacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiUbicacionPage');
  }

  public buscarUbicacion(): void {
    alert('ubicate');
  }

}
