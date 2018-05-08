import { Component, NgZone } from '@angular/core';
import { NavController, LoadingController, IonicPage, ToastController } from 'ionic-angular';
import { PeliculasProvider } from '../../providers/peliculas/peliculas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public data: any;
  public buscandoPeliculas: boolean;

  constructor(
    public navCtrl: NavController,
    public peliculasProvider: PeliculasProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private ngZone: NgZone,
  ) {
    this.data = {};
    this.buscandoPeliculas = false;
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad home');
  }

  public irListadoPeliculas(): void {
    this.navCtrl.push('listado-peliculas');
  }

  public login(): void {
    console.log('Datos login', this.data);
    this.navCtrl.push('listado-peliculas');
  }

}
