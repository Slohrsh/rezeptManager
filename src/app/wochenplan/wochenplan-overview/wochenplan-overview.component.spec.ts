import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WochenplanOverviewComponent } from './wochenplan-overview.component';

describe('WochenplanComponent', () => {
  let component: WochenplanOverviewComponent;
  let fixture: ComponentFixture<WochenplanOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WochenplanOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WochenplanOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
