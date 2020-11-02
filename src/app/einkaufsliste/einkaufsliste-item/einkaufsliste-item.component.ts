import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EinkaufslisteEintrag } from 'src/app/model/einkaufsliste';
import { Rezept } from 'src/app/model/rezept';
import { EinkaufslisteService } from 'src/app/service/einkaufsliste.service';
import { RezepteService } from 'src/app/service/rezepte.service';

@Component({
  selector: 'rezManager-einkaufsliste-item',
  templateUrl: './einkaufsliste-item.component.html',
  styleUrls: ['./einkaufsliste-item.component.sass']
})
export class EinkaufslisteItemComponent implements OnInit {

  @Output() deleteEintrag = new EventEmitter<EinkaufslisteEintrag>();
  @Input() eintrag: EinkaufslisteEintrag;
  mengen: string;
  isChecked: boolean;
  rezepte: Rezept[];

  constructor(
    private es: EinkaufslisteService,
    private rs: RezepteService) { }

  ngOnInit(): void {
    this.rezepte = [];
    this.eintrag.mengen.forEach(element => {
      if (this.mengen) {
        this.mengen = this.mengen + ', ' + element.menge + ' ' + element.einheit;
      } else {
        this.mengen = element.menge + ' ' + element.einheit;
      }
    });

    this.eintrag.rezeptIds.forEach(rezeptId => {
      this.rs.getRezept(rezeptId).subscribe((rezept) => this.rezepte.push(rezept))
    });

    this.isChecked = this.eintrag.checked;
  }

  delete() {
    this.eintrag.ids.forEach((id) => {
      this.es.delete(id)
        .subscribe(() => console.log('delete'));
      this.deleteEintrag.emit(this.eintrag);
    })
  }

  checked() {
    this.eintrag.ids.forEach((id) => {
      this.es.checked(this.isChecked, id)
        .subscribe(() => console.log('checked'));
    });
  }

}
