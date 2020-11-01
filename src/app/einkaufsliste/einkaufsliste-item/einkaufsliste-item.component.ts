import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EinkaufslisteEintrag } from 'src/app/model/einkaufsliste';
import { EinkaufslisteService } from 'src/app/service/einkaufsliste.service';

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

  constructor(private es: EinkaufslisteService) { }

  ngOnInit(): void {
    this.eintrag.mengen.forEach(element => {
      if(this.mengen) {
        this.mengen = this.mengen + ', ' + element.menge + ' ' + element.einheit;
      } else {
        this.mengen = element.menge + ' ' + element.einheit;
      }
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

  checked(){
    this.eintrag.ids.forEach((id) => {
    this.es.checked(this.isChecked, id)
      .subscribe(() => console.log('checked'));
    });
  }

}
