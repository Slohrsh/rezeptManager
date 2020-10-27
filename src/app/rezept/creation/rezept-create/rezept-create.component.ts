import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rezept } from 'src/app/model/rezept';
import { RezepteService } from 'src/app/service/rezepte.service';

@Component({
  selector: 'rezManager-rezept-create',
  templateUrl: './rezept-create.component.html',
  styleUrls: ['./rezept-create.component.sass']
})
export class RezeptCreateComponent implements OnInit {

  constructor(
    private rs: RezepteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createRezept(rezept: Rezept) {
    this.rs.create(rezept).subscribe(() => {
      this.router.navigate(['../', 'rezept'], { relativeTo: this.route });
    });
  }

}
