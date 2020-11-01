import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinkaufslisteListComponent } from './einkaufsliste-list.component';

describe('EinkaufslisteListComponent', () => {
  let component: EinkaufslisteListComponent;
  let fixture: ComponentFixture<EinkaufslisteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinkaufslisteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinkaufslisteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
