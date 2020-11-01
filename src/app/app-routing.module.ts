import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EinkaufslisteListComponent } from './einkaufsliste/einkaufsliste-list/einkaufsliste-list.component';
import { RezeptCreateComponent } from './rezept/creation/rezept-create/rezept-create.component';
import { RezeptEditComponent } from './rezept/edit/rezept-edit/rezept-edit.component';
import { RezepteListComponent } from './rezept/overview/rezepte-list/rezepte-list.component';
import { RezeptDetailsComponent } from './rezept/rezept-details/rezept-details.component';
import { WochenplanDruckComponent } from './wochenplan/wochenplan-druck/wochenplan-druck.component';
import { WochenplanOverviewComponent } from './wochenplan/wochenplan-overview/wochenplan-overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'rezept',
    pathMatch: 'full'
  },
  {
    path: 'rezept',
    component: RezepteListComponent
  },
  {
    path: 'rezept/detail/:rezeptId',
    component: RezeptDetailsComponent
  },
  {
    path: 'rezept/edit/:rezeptId',
    component: RezeptEditComponent
  },
  {
    path: 'wochenplan',
    component: WochenplanOverviewComponent
  },
  {
    path: 'wochenplan/druck',
    component: WochenplanDruckComponent
  },
  {
    path: 'admin',
    component: RezeptCreateComponent
  },
  {
    path: 'einkaufsliste',
    component: EinkaufslisteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
