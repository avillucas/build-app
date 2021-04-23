import { Component } from '@angular/core';
import { ItemsService, Item } from '../services/items.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public itemService:ItemsService   ,
    public router:Router
  )
  {  }

  public showItem(item:Item){       
    this.router.navigate(['/dashboard/vote',{'id':item.id}]);
  }
}


