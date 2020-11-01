import { TestBed } from '@angular/core/testing';

import { EinkaufslisteService } from './einkaufsliste.service';

describe('EinkaufslisteService', () => {
  let service: EinkaufslisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EinkaufslisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
