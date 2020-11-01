import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Observer, Subject } from 'rxjs';
import { FavoritDisplayView } from 'src/app/model/favorit';
import { WochenplanEintrag, WochenplanEintragView } from 'src/app/model/wochenplan';
import { FavoritService } from 'src/app/service/favorit.service';
import { Rezept } from '../../model/rezept';
import { WochenplanService } from '../../service/wochenplan.service';

@Component({
  selector: 'rezManager-wochenplan-druck',
  templateUrl: './wochenplan-druck.component.html',
  styleUrls: ['./wochenplan-druck.component.sass']
})
export class WochenplanDruckComponent implements OnInit {

  constructor(
    private ws: WochenplanService) { }

  eintraege$: Observable<WochenplanEintragView[]>;

  eintraege: WochenplanEintragView[] = [];

  summe: number[] = [0,0,0,0,0,0,0];
  
  ngOnInit(): void {
    this.eintraege$ = this.ws.getAllEintraege(45);
    this.eintraege$.subscribe((eintraege) => {
      eintraege.forEach((eintrag) => {
        this.summe[eintrag.tag] += eintrag.rezept.kcal;
        this.eintraege.push(eintrag);
      });
    });
  }
}
