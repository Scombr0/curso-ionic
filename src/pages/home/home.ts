import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { PeliculasProvider } from '../../providers/peliculas/peliculas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public textoPrueba: any;

  constructor(
    public navCtrl: NavController,
    public peliculasProvider: PeliculasProvider,
    private loadingCtrl: LoadingController
  ) {

  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad home');
    this.textoPrueba = this.peliculasProvider.getNombrePelicula();
  }

  public irListadoPeliculas(): void {
    this.navCtrl.push('listado-peliculas');
  }

  public buscarPelicula(): void {
    let loading = this.loadingCtrl.create({ content: 'Buscando película..' });
    loading.present();
    this.peliculasProvider.buscarPelicula('avengers').then(
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
