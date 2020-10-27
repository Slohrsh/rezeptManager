import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { WochenplanEintragView } from 'src/app/model/wochenplan';
import { WochenplanItem } from '../../model/transfer';

@Component({
  selector: 'rezManager-wochenplan-item',
  templateUrl: './wochenplan-item.component.html',
  styleUrls: ['./wochenplan-item.component.sass']
})
export class WochenplanItemComponent implements OnInit {

  private eventsSubscription: Subscription;

  @Input() events: Subject<WochenplanItem>;
  @Input() posTag: number;
  @Input() posZeitraum: string;
  @Input() eintraege: WochenplanEintragView[];

  titel: string;
  
  ngOnInit(){
    this.eventsSubscription = this.events.subscribe((item) => this.setRezept(item));
    const currentEintrag = this.getCurrentEintrag(this.posZeitraum, this.posTag)
    if(currentEintrag){
      this.titel = currentEintrag.rezept.titel;
    }
  }

  getCurrentEintrag(zeitraum, tag): WochenplanEintragView {
    let foundEintrag: WochenplanEintragView; 

    this.eintraege.forEach((eintrag) => {
      if(zeitraum === eintrag.zeitraum && tag === eintrag.tag) {
        foundEintrag = eintrag;
        return;
      }
    });

    return foundEintrag;
  }
  
  setRezept(item: WochenplanItem) {
    if(this.posTag === item.posTag && this.posZeitraum === item.posZeitraum) {
      this.titel = item.titel;
    }
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

}
