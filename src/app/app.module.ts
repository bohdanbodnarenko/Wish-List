import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemComponent } from './components/item/item.component';
import { WihsesListComponent } from './components/wihses-list/wihses-list.component';
import { CatalogueListComponent } from './components/catalogue-list/catalogue-list.component';
import { RouterModule } from '@angular/router';
import { CatalogueService } from './services/catalogue.service';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DraggableDirective } from './components/draggable/draggable.directive';
import { SearchComponent } from './components/navbar/search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemComponent,
    WihsesListComponent,
    CatalogueListComponent,
    DraggableDirective,
    SearchComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule, 
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    FormsModule
  ],
  providers: [CatalogueService],
  bootstrap: [AppComponent],
  exports:[DraggableDirective]
})
export class AppModule { }
