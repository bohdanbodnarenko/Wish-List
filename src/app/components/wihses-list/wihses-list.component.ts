import { Component, OnInit } from "@angular/core";
import { Item } from "src/app/models/item.model";
import { CatalogueService } from "src/app/services/catalogue.service";
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: "app-wihses-list",
  templateUrl: "./wihses-list.component.html",
  styleUrls: ["./wihses-list.component.css"],
  animations:[
    trigger('wish',[
      transition('void <=> *', [
        style({transform:'translateX(-90px)'}),
        animate(300)
      ])
    ])
  ]
})
export class WihsesListComponent implements OnInit {
  public wishList: Item[] = [];

  constructor(private catalogueService: CatalogueService) {}

  //i need help
  ngOnInit() {
    this.catalogueService.getWishList().subscribe(list => {
      this.wishList = list;
    });
  }

  add(item: Item) {
    item.count++;
    console.log(item);
    this.catalogueService.updateItem(item);
  }

  substract(item: Item) {
    let index = this.wishList.indexOf(item);
    item.count--;
    if (item.count === 0) {
      item.count = 1;
      item.isInList = false;
      this.wishList.splice(index, 1);
    }
    this.catalogueService.updateItem(item);
  }

  setCount(item: Item, value: string) {
    if (value) {
      if (+value > 0) {
        item.count = +value;
      } else {
        item.count = 1;
        item.isInList = false;
        this.wishList.splice(this.wishList.indexOf(item), 1);
      }
      this.catalogueService.updateItem(item);
    }
  }
}
