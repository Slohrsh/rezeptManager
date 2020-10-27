import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { Nl2brPipe } from './nl2br.pipe';
import { WochenplanOverviewComponent } from './wochenplan/wochenplan-overview/wochenplan-overview.component';
import { SearchZutatenComponent } from './common/search/search-zutaten/search-zutaten.component';
import { WochenplanItemComponent } from './wochenplan/wochenplan-item/wochenplan-item.component';
import { SearchRezeptComponent } from './common/search/search-rezept/search-rezept.component';
import { RezepteListComponent } from './rezept/overview/rezepte-list/rezepte-list.component';
import { RezeptListItemComponent } from './rezept/overview/rezept-list-item/rezept-list-item.component';
import { RezeptDetailsComponent } from './rezept/rezept-details/rezept-details.component';
import { RezeptCreateComponent } from './rezept/creation/rezept-create/rezept-create.component';
import { RezeptFormComponent } from './rezept/creation/rezept-form/rezept-form.component';
import { FavoritenListComponent } from './wochenplan/favoriten-list/favoriten-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RezepteListComponent,
    RezeptListItemComponent,
    RezeptDetailsComponent,
    RezeptCreateComponent,
    RezeptFormComponent,
    Nl2brPipe,
    WochenplanOverviewComponent,
    SearchZutatenComponent,
    WochenplanItemComponent,
    SearchRezeptComponent,
    FavoritenListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
