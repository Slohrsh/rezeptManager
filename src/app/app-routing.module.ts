import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RezeptCreateComponent } from './rezept/creation/rezept-create/rezept-create.component';
import { RezepteListComponent } from './rezept/overview/rezepte-list/rezepte-list.component';
import { RezeptDetailsComponent } from './rezept/rezept-details/rezept-details.component';
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
    path: 'rezept/:rezeptId',
    component: RezeptDetailsComponent
  },
  {
    path: 'wochenplan',
    component: WochenplanOverviewComponent
  },
  {
    path: 'admin',
    component: RezeptCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
