import { Component, OnInit } from '@angular/core';
import { Item, ItemsService } from '../services/items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.page.html',
  styleUrls: ['./vote.page.scss'],
})
export class VotePage implements OnInit {

  public item:Item;

  constructor(
    public activerRouter:ActivatedRoute,
    public itemsService:ItemsService,
    public alertController:AlertController,    
    public router:Router,
    public loadingController:LoadingController
  ) { }


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

  ngOnInit() {
    const index = this.activerRouter.params.subscribe(params=>{      
      const id = parseInt(params['id'])||1;            
      console.info(id);
      this.item = this.itemsService.find(id);
    });
  }

  async votarLindo(){
    this.votar(true);
  }

  async votarFeo(){
    this.votar(false);
  }

  async votar(votoLindo:boolean){
    const loading = await this.loadingController.create();
    await loading.present();
    //@todo completar
    setTimeout(()=>{
      loading.dismiss();
      this.presentAlert('¡Perfecto!','Hemos marcado tu voto','¡Tu voto se guardo correctamente!');
    },1500);

  }

}
