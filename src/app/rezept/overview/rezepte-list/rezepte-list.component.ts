import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RezepteService } from '../../../service/rezepte.service';
import { observable, Observable, Subject } from 'rxjs';
import { Rezept } from '../../../model/rezept'
import { RezeptDetailsComponent } from '../../rezept-details/rezept-details.component';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'rezManager-rezepte-list',
  templateUrl: './rezepte-list.component.html',
  styleUrls: ['./rezepte-list.component.sass']
})
export class RezepteListComponent implements OnInit {

  rezepte$: Subject<Rezept[]> = new Subject<Rezept[]>();


  constructor(private rs: RezepteService) { }

  ngOnInit(): void {
      this.rs.getAllRezepte().subscribe((rezepte) => {
        this.rezepte$.next(rezepte);
      })
  }

}
