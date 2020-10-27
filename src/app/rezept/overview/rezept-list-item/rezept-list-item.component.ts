import { Component, OnInit, Input } from '@angular/core';
import { Rezept } from 'src/app/model/rezept';


@Component({
  selector: 'rezManager-rezept-list-item',
  templateUrl: './rezept-list-item.component.html',
  styleUrls: ['./rezept-list-item.component.sass']
})
export class RezeptListItemComponent implements OnInit {

  @Input() rezept: Rezept;

  constructor() { }

  ngOnInit(): void {
  }

}
