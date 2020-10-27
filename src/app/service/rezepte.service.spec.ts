import { TestBed } from '@angular/core/testing';

import { RezepteService } from './rezepte.service';

describe('RezepteService', () => {
  let service: RezepteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RezepteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
