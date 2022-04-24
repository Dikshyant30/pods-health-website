import { TestBed } from '@angular/core/testing';

import { PodHealthService } from './pod-health.service';

describe('PodHealthService', () => {
  let service: PodHealthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodHealthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
