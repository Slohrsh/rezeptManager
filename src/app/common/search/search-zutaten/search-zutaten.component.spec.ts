import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchZutatenComponent } from './search-zutaten.component';

describe('SearchZutatenComponent', () => {
  let component: SearchZutatenComponent;
  let fixture: ComponentFixture<SearchZutatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchZutatenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchZutatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
