import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, filter } from 'rxjs/operators';

import { Zutat } from '../../../model/rezept';
import { RezepteService } from '../../../service/rezepte.service';

@Component({
  selector: 'rezManager-search-zutaten',
  templateUrl: './search-zutaten.component.html',
  styleUrls: ['./search-zutaten.component.sass']
})
export class SearchZutatenComponent implements OnInit {

  @Output() zutat = new EventEmitter<Zutat>();
  keyUp$ = new Subject<string>();
  isLoading = false;
  foundZutaten: Zutat[] = [];
  @Input() searchText: string;

  constructor(private rs: RezepteService) { }

  ngOnInit(): void {
    this.keyUp$.pipe(
      filter(term => term.length >= 2),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(searchTerm => this.rs.getAllZutatenSearch(searchTerm)),
      tap(() => this.isLoading = false)
    )
    .subscribe(zutaten => this.foundZutaten = zutaten);
  }

  selectZutat(zutat: Zutat){
    this.foundZutaten = [];
    this.zutat.emit(zutat);
  }

}
