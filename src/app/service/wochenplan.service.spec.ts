import { TestBed } from '@angular/core/testing';

import { WochenplanService } from './wochenplan.service';

describe('WochenplanService', () => {
  let service: WochenplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WochenplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
