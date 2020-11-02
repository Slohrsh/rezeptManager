import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { WochenplanEintragView } from 'src/app/model/wochenplan';
import { ConfigurationService } from 'src/app/service/configuration.service';

@Component({
  selector: 'rezManager-wochenplan-item',
  templateUrl: './wochenplan-item.component.html',
  styleUrls: ['./wochenplan-item.component.sass']
})
export class WochenplanItemComponent implements OnInit {

  private eventsSubscription: Subscription;

  @Input() events: Subject<WochenplanEintragView>;
  @Input() posTag: number;
  @Input() posZeitraum: string;
  @Input() eintraege: WochenplanEintragView[];

  @Input() showQr: boolean = false;

  titel: string;
  kcal: number;
  url: string;

  constructor(private config: ConfigurationService) {}
  
  ngOnInit(){
    if(this.events) {
      this.eventsSubscription = this.events.subscribe((item) => this.setRezept(item));
    }
    const currentEintrag = this.getCurrentEintrag(this.posZeitraum, this.posTag)
    if(currentEintrag){
      this.titel = currentEintrag.rezept.titel;
      this.kcal = currentEintrag.rezept.kcal;
      this.url = this.config.appUrl + '/rezept/detail/' + currentEintrag.rezept.id;
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
  
  setRezept(item: WochenplanEintragView) {
    if(this.posTag === item.tag && this.posZeitraum === item.zeitraum) {
      this.titel = item.rezept.titel;
    }
  }

  ngOnDestroy() {
    if(this.eventsSubscription) {
      this.eventsSubscription.unsubscribe();
    }
  }

}
