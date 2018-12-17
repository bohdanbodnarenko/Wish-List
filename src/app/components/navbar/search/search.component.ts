import { Component, OnInit } from "@angular/core";
import { CatalogueService } from "src/app/services/catalogue.service";
import { Item } from "src/app/models/item.model";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
  animations: [
    trigger("fade", [
      transition("void => *", [
        style({ opacity: 0, transform: "translateX(-20px)" }),
        animate(400)
      ])
    ])
  ]
})
export class SearchComponent implements OnInit {
  searchValue: string = "";

  constructor(private catalogueService: CatalogueService) {}

  allItems = [];
  filteredItems = [];

  ngOnInit() {
    this.catalogueService.getItems().subscribe(list => {
      this.allItems = list;
    });
  }

  find(criteria: string) {
    criteria = criteria ? criteria.trim() : "";

    this.filteredItems = this.allItems.filter(hero =>
      hero.name.toLowerCase().includes(criteria.toLowerCase())
    );
  }

  addToList(item: Item) {
    this.catalogueService.addToWishList(item);
    this.filteredItems = undefined;
  }
}
