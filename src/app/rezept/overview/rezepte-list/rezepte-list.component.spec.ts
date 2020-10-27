import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezepteListComponent } from './rezepte-list.component';

describe('RezepteListComponent', () => {
  let component: RezepteListComponent;
  let fixture: ComponentFixture<RezepteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezepteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezepteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
