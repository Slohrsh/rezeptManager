import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritenListComponent } from './favoriten-list.component';

describe('FavoritenListComponent', () => {
  let component: FavoritenListComponent;
  let fixture: ComponentFixture<FavoritenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritenListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
