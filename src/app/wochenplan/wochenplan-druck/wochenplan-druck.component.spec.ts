import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WochenplanDruckComponent } from './wochenplan-druck.component';

describe('WochenplanDruckComponent', () => {
  let component: WochenplanDruckComponent;
  let fixture: ComponentFixture<WochenplanDruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WochenplanDruckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WochenplanDruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
