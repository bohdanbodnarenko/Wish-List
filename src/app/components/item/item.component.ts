import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item:Item;

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
  }

  addToList(item:Item){
    this.catalogueService.addToWishList(item);
    item.isInList = true;
  }

}
