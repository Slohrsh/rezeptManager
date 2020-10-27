import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WochenplanItemComponent } from './wochenplan-item.component';

describe('WochenplanItemComponent', () => {
  let component: WochenplanItemComponent;
  let fixture: ComponentFixture<WochenplanItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WochenplanItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WochenplanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
