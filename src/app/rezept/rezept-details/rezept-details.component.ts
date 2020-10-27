import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RezepteService } from '../../service/rezepte.service';
import { Rezept } from '../../model/rezept'
import { FavoritService } from '../../service/favorit.service';

@Component({
  selector: 'rezManager-rezept-details',
  templateUrl: './rezept-details.component.html',
  styleUrls: ['./rezept-details.component.sass']
})
export class RezeptDetailsComponent implements OnInit {

  rezept: Rezept;

  constructor(
    private rs: RezepteService,
    private fs: FavoritService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.rs.getRezept(params.get('rezeptId'))
      .subscribe(r => this.rezept = r);
  }

  saveFavorit(rezeptId: number) {
    this.fs.create({ rezeptId: rezeptId })
      .subscribe(() => {
        this.router.navigate(['../', 'rezept'], { relativeTo: this.route });
      });
  }

}
