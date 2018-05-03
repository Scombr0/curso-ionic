import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PeliculasProvider } from '../../providers/peliculas/peliculas';

/**
 * Generated class for the ListadoPeliculasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'listado-peliculas'
})
@Component({
  selector: 'page-listado-peliculas',
  templateUrl: 'listado-peliculas.html',
})
export class ListadoPeliculasPage {
  public listadoPeliculas;
  public arrayPeliculas: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public peliculasProvider: PeliculasProvider,
  ) {
    console.log('Constructor');
    this.arrayPeliculas = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPeliculasPage');
    this.listadoPeliculas = this.navParams.get('peliculasLista');
    this.arrayPeliculas = this.listadoPeliculas.Search;
    console.log('this.listadoPeliculas', this.listadoPeliculas);
  }

}
