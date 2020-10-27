import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptCreateComponent } from './rezept-create.component';

describe('RezeptCreateComponent', () => {
  let component: RezeptCreateComponent;
  let fixture: ComponentFixture<RezeptCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezeptCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RezeptCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
