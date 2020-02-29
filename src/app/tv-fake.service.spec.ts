import { TestBed } from '@angular/core/testing';

import { TvFakeService } from './tv-fake.service';

describe('TvFakeService', () => {
  let service: TvFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
