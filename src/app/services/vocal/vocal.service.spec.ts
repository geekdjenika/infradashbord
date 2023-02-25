import { TestBed } from '@angular/core/testing';

import { VocalService } from './vocal.service';

describe('VocalService', () => {
  let service: VocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
