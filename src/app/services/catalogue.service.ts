import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private itemList:Item[] = [
    {id:1,name:'Fallout 76',linkToImage:'https://i1.rozetka.ua/goods/7525759/fallout_76_images_7525759386.jpg',isInList:false},
    {id:2,name:'Battlefield 5',linkToImage:'https://cdn.wccftech.com/wp-content/uploads/2018/05/Battlefield-V-battle-royale.jpg',isInList:false},
    {id:3,name:'Fortnite',linkToImage:'https://images-na.ssl-images-amazon.com/images/I/81MtxJhIhiL._SY445_.jpg',isInList:false},
    {id:4,name:'Warcraft',linkToImage:'https://i.ebayimg.com/images/g/MOUAAOSwIspabu-g/s-l1600.jpg',isInList:false},
    {id:5,name:'Grand Theft Auto V',linkToImage:'https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1428955349.jpg',isInList:false},
    {id:6,name:'Destiny 2',linkToImage:'https://images.g2a.com/newlayout/323x433/1x1x0/c39f2ffa0891/5af448a95bafe3234418c7b4',isInList:false},
    {id:7,name:'Skyrim',linkToImage:'https://www.digitalcodes.in/wp-content/uploads/2017/12/Skyrim-V-Special-Edition.png',isInList:false},
  ];

  private localSt = window.localStorage;
  constructor() {
     this.addToJSON();
   }

  public getItems():Item[]{
    return this.itemList;
  }

  public addItem(item:Item):void{
    this.itemList.push(item);
    this.addToJSON();
  }

  private addToJSON():void{
    this.localSt.setItem('catalogue',JSON.stringify(this.itemList));
  }
}


