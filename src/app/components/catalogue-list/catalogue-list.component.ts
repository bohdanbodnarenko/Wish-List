import { Component, OnInit } from "@angular/core";
import { CatalogueService } from "src/app/services/catalogue.service";
import { Item } from "src/app/models/item.model";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: "app-catalogue-list",
  templateUrl: "./catalogue-list.component.html",
  styleUrls: ["./catalogue-list.component.css"],
  animations:[
    trigger('move',[
      transition('void => *',[
        style({
          opacity:0,
          transform:'translateY(100%)'
        }),animate(100)
      ])
    ]),
    trigger('fade',[
      transition('void => *', [
        style({opacity:0,transform:'translateY(50px)'}),
        animate(400)
      ])
    ])
  ]
})
export class CatalogueListComponent implements OnInit {

  public catalogue: Item[];
  public isDragged:boolean = false;
  constructor(private catalogueService: CatalogueService) {}

  
  public getCurrentState() : string {
    return this.isDragged ? 'up' : 'down'; 
  }
  

  onDragged(height,item:Item){
    if (window.innerHeight-(window.innerHeight/3)<height) {
      this.catalogueService.addToWishList(item)
    }
    this.isDragged = false;
  }

  dragStart(){
    this.isDragged = true;
  }

  ngOnInit() {
    this.catalogueService.getItems().subscribe(catalogue => {
      this.catalogue = catalogue;
    });
  }
}
