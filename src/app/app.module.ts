import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemComponent } from './components/item/item.component';
import { WihsesListComponent } from './components/wihses-list/wihses-list.component';
import { CatalogueListComponent } from './components/catalogue-list/catalogue-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueService } from './services/catalogue.service';

const appRoutes: Routes = [
  { path: 'wishes-list', component: WihsesListComponent },
  { path: 'catalogue-list',      component: CatalogueListComponent },
  { path: '',
    redirectTo: '/catalogue-list',
    pathMatch: 'full'
  },
  { path: '**',
  redirectTo: '/catalogue-list',
  pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemComponent,
    WihsesListComponent,
    CatalogueListComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [CatalogueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
