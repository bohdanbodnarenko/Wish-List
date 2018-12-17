import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WihsesListComponent } from './components/wihses-list/wihses-list.component';
import { CatalogueListComponent } from './components/catalogue-list/catalogue-list.component';

export const appRoutes: Routes = [
  { path: 'wishes-list', component: WihsesListComponent, data: {depth: 2} },
  { path: 'catalogue-list',      component: CatalogueListComponent, data: {depth: 1} },
  { path: '',
    redirectTo: '/catalogue-list',
    pathMatch: 'full'
  },
  { path: '**',
  redirectTo: '/catalogue-list',
  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
