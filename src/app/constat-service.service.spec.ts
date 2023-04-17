import { TestBed } from '@angular/core/testing';

import { ConstatServiceService } from './_services/constat-service.service';

describe('ConstatServiceService', () => {
  let service: ConstatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
