import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptDetailsComponent } from './rezept-details.component';

describe('RezeptDetailsComponent', () => {
  let component: RezeptDetailsComponent;
  let fixture: ComponentFixture<RezeptDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezeptDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
