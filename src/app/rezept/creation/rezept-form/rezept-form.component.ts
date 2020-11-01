import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ValidationErrors } from '@angular/forms';
import { Rezept, Zutat } from 'src/app/model/rezept';

@Component({
  selector: 'rezManager-rezept-form',
  templateUrl: './rezept-form.component.html',
  styleUrls: ['./rezept-form.component.sass']
})
export class RezeptFormComponent implements OnInit {

  rezeptForm: FormGroup;

  @Input() rezept: Rezept;
  @Input() editing = false;
  @Output() submitRezept = new EventEmitter<Rezept>();

  loadedZutaten: Zutat[] = [];

  get zutaten(): FormArray {
    return this.rezeptForm.get('zutaten') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    if(this.rezept) {
      this.setFormValues(this.rezept);
    }
  }

  private setFormValues(rezept: Rezept) {
    console.log('rezept');
    console.log(rezept);
    this.rezeptForm.patchValue(rezept);

    this.rezeptForm.setControl(
      'zutaten',
      this.buildZutatenArray(rezept.zutaten)
    );
  }

  addZutatControl() {
    this.zutaten.push(
      this.fb.group({menge : '', beschreibung: '', einheit: ''})
    );
  }

  addZutat(zutat) {
    this.zutaten.push(
      this.fb.group({menge : '', beschreibung: zutat.zutat, einheit: '', id: zutat.id })
    );
    this.loadedZutaten.push(zutat);
  }

  private initForm() {
    if (this.rezeptForm) { return; }

    this.rezeptForm = this.fb.group({
      titel: ['', Validators.required],
      bild: [''],
      kcal: [''],
      rezept: ['', Validators.required],
      zutaten: this.buildZutatenArray(null)
    });
  }

  deleteZutat(index: number) {
    this.zutaten.removeAt(index);
  } 

  private buildZutatenArray(values: Zutat[]): FormArray {
    if(values){
      return this.fb.array(
        values.map(t => this.fb.group(t))
      );
    }
    return this.fb.array([]);
  }

  submitForm() {
    const formValue = this.rezeptForm.value;

    if(formValue.zutaten) {
      for(let zutat of formValue.zutaten) {
        for(let loadedZutat of this.loadedZutaten){
          if(loadedZutat.beschreibung === zutat.beschreibung){
            zutat.id = loadedZutat.id;
          }
        }
      }
    }

    const newRezept: Rezept = {
      ...formValue
    };

    this.submitRezept.emit(newRezept);
    this.rezeptForm.reset();
  }

}
