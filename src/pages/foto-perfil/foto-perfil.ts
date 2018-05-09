import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// ionic-native
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage({
  name: 'foto-perfil'
})
@Component({
  selector: 'page-foto-perfil',
  templateUrl: 'foto-perfil.html',
})
export class FotoPerfilPage {
  public fotoPerfil: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FotoPerfilPage');
  }

  public sacarFoto(): void {
    let options: CameraOptions = {
      quality: 100,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.fotoPerfil = base64Image;
    }, (err) => {
      // Handle error
    });
  }

  public abrirGaleria(): void {
    let options: CameraOptions = {
      quality: 100,
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.fotoPerfil = base64Image;
    }, (err) => {
      // Handle error
    });
  }
}
