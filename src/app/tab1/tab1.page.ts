import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor(public router:Router) {}
  public fotoLinda(){
    //@todo completar proceso para decir que es linda o fea
    this.foto();
  }
  public fotoFea(){
    //@todo completar proceso para decir que es linda o fea
    this.foto();
  }
  protected  foto(){
    this.router.navigateByUrl('dashboard/tab3');
  }


}
