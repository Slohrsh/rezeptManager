import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRezeptComponent } from './search-rezept.component';

describe('SearchRezeptComponent', () => {
  let component: SearchRezeptComponent;
  let fixture: ComponentFixture<SearchRezeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRezeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRezeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
