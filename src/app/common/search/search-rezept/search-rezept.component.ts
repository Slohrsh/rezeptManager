import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { Rezept } from '../../../model/rezept';
import { RezepteService } from '../../../service/rezepte.service';

@Component({
  selector: 'rezManager-search-rezept',
  templateUrl: './search-rezept.component.html',
  styleUrls: ['./search-rezept.component.sass']
})
export class SearchRezeptComponent implements OnInit {

  @Input() rezepte: Subject<Rezept[]>;
  keyUp$ = new Subject<string>();
  isLoading = false;
  @Input() searchText: string;

  constructor(private rs: RezepteService) { }

  ngOnInit(): void {
    this.keyUp$.pipe(
      filter(term => term.length >= 3),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(searchTerm => this.rs.getAllRezepteSearch(searchTerm)),
      tap(() => this.isLoading = false)
    )
    .subscribe(rezepte => this.rezepte.next(rezepte));
  }

}
