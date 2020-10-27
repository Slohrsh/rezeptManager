import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';
import { FavoritDisplayView } from 'src/app/model/favorit';
import { WochenplanEintragView } from 'src/app/model/wochenplan';
import { FavoritService } from 'src/app/service/favorit.service';
import { Rezept } from '../../model/rezept';
import { WochenplanItem } from '../../model/transfer';
import { WochenplanService } from '../../service/wochenplan.service';

@Component({
  selector: 'rezManager-wochenplan',
  templateUrl: './wochenplan-overview.component.html',
  styleUrls: ['./wochenplan-overview.component.sass']
})
export class WochenplanOverviewComponent implements OnInit {

  constructor(
    private ws: WochenplanService,
    private fs: FavoritService) { }

  draggedItem: Rezept;

  dropSubject: Subject<WochenplanItem> = new Subject<WochenplanItem>();

  favoriten: FavoritDisplayView[];

  eintraege$: Observable<WochenplanEintragView[]>;

  summe: number[] = [0,0,0,0,0,0,0];
  
  ngOnInit(): void {
    this.fs.getAllFavoriten().subscribe((favoriten) => {
      this.favoriten = favoriten;
    });

    this.eintraege$ = this.ws.getAllEintraege(45);
    this.eintraege$.subscribe((eintraege) => {
      eintraege.forEach((eintrag) => {
        this.summe[eintrag.tag] += eintrag.rezept.kcal;
      });
    });
    this.dropSubject.subscribe((eintrag) => {
        console.log(eintrag);
        this.summe[eintrag.posTag] += eintrag.kcal;
    });
  }
  
  
  dragStart(rezept: Rezept) {
    this.draggedItem = rezept;
  }

  dragStop() {
    this.draggedItem = undefined;
  }

  dragOver(event: DragEvent) {
    if (this.draggedItem) {
      event.preventDefault();
    }
  }

  drop(event: DragEvent, zeitraum: string, i: number) {
    this.dropSubject.next({
      posTag: i,
      posZeitraum: zeitraum,
      titel: this.draggedItem.titel,
      id: this.draggedItem.id,
      kcal: this.draggedItem.kcal
    });

    this.ws.create({
      kw: 45,
      tag: i,
      zeitraum: zeitraum,
      rezeptId: this.draggedItem.id
    }).subscribe(()=>{console.log('gespeichert')});
  };

}
