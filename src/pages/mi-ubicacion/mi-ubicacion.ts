import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation, Geoposition, GeolocationOptions } from '@ionic-native/geolocation';

@IonicPage({
  name: 'mi-ubicacion'
})
@Component({
  selector: 'page-mi-ubicacion',
  templateUrl: 'mi-ubicacion.html',
})
export class MiUbicacionPage {
  public mensajeUbicacion: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiUbicacionPage');
  }

  public buscarUbicacion(): void {
    // let opciones: GeolocationOptions = {
    //   enableHighAccuracy: true,
    // };
    this.geolocation.getCurrentPosition().then(
      (position) => this.successGetCurrentPosition(position),
      (error) => this.errorGetCurrentPosition(error)
    );
  }

  private successGetCurrentPosition(position: Geoposition): void {
    console.log(position);
    let mensaje = `
    Su ubicación actual es:
    Latitud: ${position.coords.latitude}
    Longitud: ${position.coords.longitude}
    Altura: ${position.coords.altitude}
    Precisión: ${position.coords.accuracy}
    `;
    this.mensajeUbicacion = mensaje;
  }
  private errorGetCurrentPosition(error): void {
    alert('Oops, no pudimos encontrar tu location');
  }

}
