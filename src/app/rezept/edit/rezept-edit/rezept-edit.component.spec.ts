import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptEditComponent } from './rezept-edit.component';

describe('RezeptEditComponent', () => {
  let component: RezeptEditComponent;
  let fixture: ComponentFixture<RezeptEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezeptEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
