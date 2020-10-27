import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptListItemComponent } from './rezept-list-item.component';

describe('RezeptListItemComponent', () => {
  let component: RezeptListItemComponent;
  let fixture: ComponentFixture<RezeptListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezeptListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
