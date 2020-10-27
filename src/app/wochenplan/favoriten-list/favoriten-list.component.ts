import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoritDisplayView } from 'src/app/model/favorit';
import { Rezept } from 'src/app/model/rezept';
import { FavoritService } from 'src/app/service/favorit.service';

@Component({
  selector: 'rezManager-favoriten-list',
  templateUrl: './favoriten-list.component.html',
  styleUrls: ['./favoriten-list.component.sass']
})
export class FavoritenListComponent implements OnInit {

  @Output() dragStarted = new EventEmitter<Rezept>();
  @Output() dragStop = new EventEmitter<Rezept>();

  favoriten$: Observable<FavoritDisplayView[]>;

  constructor(private fs: FavoritService) { }

  ngOnInit(): void {
      this.favoriten$ = this.fs.getAllFavoriten();
  }

  public dragStartEvent(event: DragEvent, item: Rezept) {
    this.dragStarted.emit(item);
  };

  public dragStopEvent(event: DragEvent, item: Rezept) {
    this.dragStop.emit(item);
  };


}
