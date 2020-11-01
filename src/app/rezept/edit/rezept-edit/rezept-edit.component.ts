import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Rezept } from 'src/app/model/rezept';
import { RezepteService } from 'src/app/service/rezepte.service';

@Component({
  selector: 'rezManager-rezept-edit',
  templateUrl: './rezept-edit.component.html',
  styleUrls: ['./rezept-edit.component.sass']
})
export class RezeptEditComponent implements OnInit {

  rezept$: Observable<Rezept>;
  rezept: Rezept;

  constructor(
    private rs: RezepteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.rezept$ = this.route.paramMap.pipe(
      map(params => params.get('rezeptId')),
      switchMap((rezeptId: string) => this.rs.getRezept(rezeptId))
    );
    this.rezept$.subscribe((rezept) => {
      this.rezept = rezept;
    })
  }

  update(rezept: Rezept) {
    rezept.id = this.rezept.id;
    this.rs.update(rezept).subscribe(() => {
      this.router.navigate(['../../..', 'rezept'], { relativeTo: this.route });
    });
  }

}
