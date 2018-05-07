import { Component } from '@angular/core';
import { NavController, LoadingController, IonicPage, ToastController } from 'ionic-angular';
import { PeliculasProvider } from '../../providers/peliculas/peliculas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public datosBusqueda: any;

  constructor(
    public navCtrl: NavController,
    public peliculasProvider: PeliculasProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
  ) {
    this.datosBusqueda = {};
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad home');
  }

  public irListadoPeliculas(): void {
    this.navCtrl.push('listado-peliculas');
  }

  public buscarPelicula(): void {
    if (!this.datosBusqueda.texto) {
      let toastError = this.toastCtrl.create({
        message: 'Ingrese texto por favor',
        duration: 1500,
        position: 'bottom'
      });
      toastError.present();
      return;
    }
    let loading = this.loadingCtrl.create({ content: 'Buscando película..' });
    loading.present();
    this.peliculasProvider.buscarPelicula(this.datosBusqueda.texto).then(
      (success) => { this.successBuscarPelicula(success, loading) },
      (error) => { this.errorBuscarPelicula(error, loading) });
  }

  private successBuscarPelicula(resultado, loading): void {
    loading.dismiss();
    let data = {
      peliculasLista: resultado
    };
    this.navCtrl.push('listado-peliculas', data);
    console.log('successBuscarPelicula', resultado);
  }

  private errorBuscarPelicula(error, loading): void {
    loading.dismiss();
    console.log('errorBuscarPelicula', error);
  }

}
