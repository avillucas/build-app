import { Injectable } from '@angular/core';
import { find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public items: Item[] = [];
  constructor() { 
    this.items = [
      {id:1,date:'12 de mayo',userName:'Admin Hector',userPhoto:'/assets/background-a.jpg'} as Item,
      {id:2,date:'10 de mayo',userName:'Invitado Juan',userPhoto:'/assets/background-b.jpeg'} as Item
    ]
  }

  find(id:number){
    let itemFound:Item;
    this.items.forEach(item => {             
      if(item.id == id as number){
        itemFound = item;
        return ;
      }
    });
    return itemFound;
  }

}

export interface Item {
  id:number,
  date: string;
  userName: string;
  userPhoto: string;
}