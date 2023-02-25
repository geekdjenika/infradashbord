import { TestBed } from '@angular/core/testing';

import { ConseilService } from './conseil.service';

describe('ConseilService', () => {
  let service: ConseilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConseilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
