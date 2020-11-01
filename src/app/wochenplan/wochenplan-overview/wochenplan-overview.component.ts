import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Observer, Subject } from 'rxjs';
import { FavoritDisplayView } from 'src/app/model/favorit';
import { WochenplanEintrag, WochenplanEintragView } from 'src/app/model/wochenplan';
import { EinkaufslisteService } from 'src/app/service/einkaufsliste.service';
import { FavoritService } from 'src/app/service/favorit.service';
import { Rezept } from '../../model/rezept';
import { WochenplanService } from '../../service/wochenplan.service';
import * as moment from 'moment';

@Component({
  selector: 'rezManager-wochenplan',
  templateUrl: './wochenplan-overview.component.html',
  styleUrls: ['./wochenplan-overview.component.sass']
})
export class WochenplanOverviewComponent implements OnInit {

  constructor(
    private ws: WochenplanService,
    private fs: FavoritService,
    private es: EinkaufslisteService,
    private router: Router,
    private route: ActivatedRoute) { }

  draggedItem: Rezept;

  dropSubject: Subject<WochenplanEintragView> = new Subject<WochenplanEintragView>();

  favoriten: FavoritDisplayView[];

  eintraege$: Observable<WochenplanEintragView[]>;

  eintraege: WochenplanEintragView[] = [];

  summe: number[] = [0,0,0,0,0,0,0];

  woche: number;
  
  ngOnInit(): void {
    this.woche = moment(new Date()).week();

    this.fs.getAllFavoriten().subscribe((favoriten) => {
      this.favoriten = favoriten;
    });

    this.aktualisiereWoche();
    this.dropSubject.subscribe((eintrag) => {
        console.log(eintrag);
        this.summe[eintrag.tag] += eintrag.rezept.kcal;
        this.eintraege.push(eintrag);
    });

  }
  
  aktualisiereWoche(){
    this.eintraege$ = this.ws.getAllEintraege(this.woche);
    this.eintraege$.subscribe((eintraege) => {
      eintraege.forEach((eintrag) => {
        this.summe[eintrag.tag] += eintrag.rezept.kcal;
        this.eintraege.push(eintrag);
      });
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
  
  navigateToRezept(zeitraum: string, tag: number){
    let item: WochenplanEintragView;
    this.eintraege.forEach((eintrag) => {
      if(zeitraum === eintrag.zeitraum && tag === eintrag.tag){
        item = eintrag;
      }
    })
    this.router.navigate(['../', 'rezept', item.rezept.id], { relativeTo: this.route })
  }
  
  druck() {
    this.router.navigate(['druck'], { relativeTo: this.route });
  }
  
  navigateToEinkaufsliste() {
    this.router.navigate(['../', 'einkaufsliste'], { relativeTo: this.route });
  }
  
  drop(event: DragEvent, zeitraum: string, i: number) {
    this.dropSubject.next({
      tag: i,
      zeitraum: zeitraum,
      rezept:{
        titel: this.draggedItem.titel,
        id: this.draggedItem.id,
        kcal: this.draggedItem.kcal,
        bild: undefined,
        rezept: undefined,
        zutaten: undefined
      }
    });
    
    this.ws.create({
      kw: this.woche,
      tag: i,
      zeitraum: zeitraum,
      rezeptId: this.draggedItem.id
    }).subscribe(()=>{console.log('gespeichert')});
    
    this.es.create(this.draggedItem.id)
    .subscribe(()=> {console.log('einkaufsliste aktualisiert')});
  };
  
}
