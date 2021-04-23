import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  constructor(
    public photoService:PhotoService,
    public loadingController:LoadingController,    
    public alertController: AlertController,
    public router: Router
  ) {
    this.takePhoto();
  }

  async presentAlert(header,subHeader,message) {
    const alert = await this.alertController.create({
      cssClass: 'alert-photos',
      header: header,    
      subHeader: subHeader,    
      message: message,
      buttons: [
        {
          text: 'Inicio',
          handler: () => {
            this.router.navigateByUrl('/dashboard');
          }
        },
        {
          text: 'Ver fotos',          
          cssClass: 'secondary',
          handler: (blah) => {
            this.router.navigateByUrl('/dashboard/tab2');
          }
        }
      ]    
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
 
  async uploadPhoto(){
    const loading = await this.loadingController.create();
    await loading.present();
    //@todo completar
    setTimeout(()=>{
      loading.dismiss();
      this.presentAlert('¡Perfecto!','La imagen fue publicada','La imagen se cargo correctamente ');
    },1500);
  }

  takePhoto(){
    this.photoService.addNewToGallery();
  }

}
