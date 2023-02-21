import { TestBed } from '@angular/core/testing';

import { InfractionService } from './infraction.service';

describe('InfractionService', () => {
  let service: InfractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
