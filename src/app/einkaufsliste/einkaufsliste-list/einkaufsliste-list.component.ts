import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EinkaufslisteEintrag } from 'src/app/model/einkaufsliste';
import { EinkaufslisteService } from 'src/app/service/einkaufsliste.service';
import { RezepteService } from 'src/app/service/rezepte.service';

@Component({
  selector: 'rezManager-einkaufsliste-list',
  templateUrl: './einkaufsliste-list.component.html',
  styleUrls: ['./einkaufsliste-list.component.sass']
})
export class EinkaufslisteListComponent implements OnInit {

  eintraege: EinkaufslisteEintrag[];

  constructor(
    private es: EinkaufslisteService) { }

  ngOnInit(): void {
    this.es.getAllEintraege().subscribe((eintraege) => this.eintraege = eintraege);
  }

  deleteEintrag(eintrag: EinkaufslisteEintrag) {
    this.eintraege.forEach( (item, index) => {
      item.ids.forEach((id) => {
        if(id === eintrag.ids[0]) {
          this.eintraege.splice(index, 1);
        }
      })
    });
  }

}
