import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { Item } from 'src/app/models/item.model';


@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrls: ['./catalogue-list.component.css']
})
export class CatalogueListComponent implements OnInit {

  public catalogue: Item[];

  constructor(private catalogueService:CatalogueService) { }

  ngOnInit() {
    this.catalogue = this.catalogueService.getItems();0
  }

}
