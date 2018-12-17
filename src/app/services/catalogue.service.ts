import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";
import { of, Observable } from "rxjs";
import { LocalStorageService } from "ngx-webstorage";
@Injectable({
  providedIn: "root"
})
export class CatalogueService {
  private itemList: Item[] = [
    {
      id: 1,
      name: "Fallout 76",
      linkToImage:
        "https://i1.rozetka.ua/goods/7525759/fallout_76_images_7525759386.jpg",
      isInList: false,
      count: 1
    },
    {
      id: 2,
      name: "Battlefield 5",
      linkToImage:
        "https://cdn.wccftech.com/wp-content/uploads/2018/05/Battlefield-V-battle-royale.jpg",
      isInList: false,
      count: 1
    },
    {
      id: 3,
      name: "Fortnite",
      linkToImage:
        "https://images-na.ssl-images-amazon.com/images/I/81MtxJhIhiL._SY445_.jpg",
      isInList: false,
      count: 1
    },
    {
      id: 4,
      name: "Warcraft",
      linkToImage:
        "https://i.ebayimg.com/images/g/MOUAAOSwIspabu-g/s-l1600.jpg",
      isInList: false,
      count: 1
    },
    {
      id: 5,
      name: "Grand Theft Auto V",
      linkToImage:
        "https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1428955349.jpg",
      isInList: false,
      count: 1
    },
    {
      id: 6,
      name: "Destiny 2",
      linkToImage:
        "https://images.g2a.com/newlayout/323x433/1x1x0/c39f2ffa0891/5af448a95bafe3234418c7b4",
      isInList: false,
      count: 1
    },
    {
      id: 7,
      name: "Skyrim",
      linkToImage:
        "https://www.digitalcodes.in/wp-content/uploads/2017/12/Skyrim-V-Special-Edition.png",
      isInList: false,
      count: 1
    },
    {
      id: 8,
      name: "Conspiracy - Weapons of Mass Destruction",
      linkToImage:
        "https://images-na.ssl-images-amazon.com/images/I/9198bxW1SRL._SL1500_.jpg",
      isInList: false,
      count: 1
    },
    {
      id: 9,
      name: "Counter-strike: Global Offensive",
      linkToImage:
        "https://images-na.ssl-images-amazon.com/images/I/81L8-mjNlrL._SX569_.jpg",
      isInList: false,
      count: 1
    },
    {
      id: 10,
      name: "Player Unknown's Battle Grounds -PUBG",
      linkToImage:
        "https://images-na.ssl-images-amazon.com/images/I/71cTCvSFJTL._SY741_.jpg",
      isInList: false,
      count: 1
    },
    {
      id: 11,
      name: "Quantum Break",
      linkToImage:
        "https://images-na.ssl-images-amazon.com/images/I/71iBBX4qIBL._SY741_.jpg",
      isInList: false,
      count: 1
    },
    {
      id: 12,
      name: "Game of Thrones - A Telltale Games Series: Season Pass Disc",
      linkToImage:
        "https://images-na.ssl-images-amazon.com/images/I/61Sn%2B84-aJL._SY741_.jpg",
      isInList: false,
      count: 1
    },
    {
      id: 13,
      name: "Mafia III - Deluxe Edition",
      linkToImage:
        "https://images-na.ssl-images-amazon.com/images/I/813Nvknzi0L._SY741_.jpg",
      isInList: false,
      count: 1
    },
    {
      id: 14,
      name: "Tomb Raider",
      linkToImage:
        "https://images-na.ssl-images-amazon.com/images/I/91NlL7n9U4L._SY741_.jpg",
      isInList: false,
      count: 1
    },
    {
      id: 15,
      name: "WWE 2K18",
      linkToImage:
        "https://images-na.ssl-images-amazon.com/images/I/91veBjYx2wL._SL1500_.jpg",
      isInList: false,
      count: 1
    }
  ];
  private wishList: Item[] = [];

  constructor(private localSt: LocalStorageService) {
    if (!JSON.parse(this.localSt.retrieve("catalogue"))) {
      this.addToLocalStCatalogue();
    } else {
      this.itemList = JSON.parse(this.localSt.retrieve("catalogue"));
    }
    if (JSON.parse(this.localSt.retrieve("wishes"))) {
      this.wishList = JSON.parse(this.localSt.retrieve("wishes"));
    } else {
      of(this.itemList.filter(item => item.isInList)).subscribe(
        list => (this.wishList = list)
      );
    }
  }

  public getItems(): Observable<Item[]> {
    return of(this.itemList);
  }

  public addItem(item: Item): void {
    this.itemList.push(item);
    this.addToLocalStCatalogue();
  }

  private addToLocalStCatalogue(): void {
    this.localSt.store("catalogue", JSON.stringify(this.itemList));
  }

  private addToLocalStWishes(): void {
    this.localSt.store("wishes", JSON.stringify(this.wishList));
  }

  public updateItem(item: Item) {
    this.itemList[item.id-1] = item;
    this.wishList = this.itemList.filter(item => item.isInList);
    this.addToLocalStWishes();
    this.addToLocalStCatalogue();
  }

  public addToWishList(item: Item) {
    if (item.isInList) {
      item.count++;
    } else {
      item.isInList = true;
      this.wishList.push(item);
    }
    this.updateItem(item);
  }

  public getWishList(): Observable<Item[]> {
    return of(JSON.parse(this.localSt.retrieve("wishes")));
  }

  public deleteFromWishes(item:Item){
    
  }

}
