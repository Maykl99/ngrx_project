import { TestBed } from '@angular/core/testing';

import { FlatserviceService } from './flatservice.service';

describe('FlatserviceService', () => {
  let service: FlatserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlatserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
