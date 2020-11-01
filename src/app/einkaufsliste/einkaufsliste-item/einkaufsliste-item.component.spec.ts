import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinkaufslisteItemComponent } from './einkaufsliste-item.component';

describe('EinkaufslisteItemComponent', () => {
  let component: EinkaufslisteItemComponent;
  let fixture: ComponentFixture<EinkaufslisteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinkaufslisteItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinkaufslisteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
