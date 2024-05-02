import { TestBed } from '@angular/core/testing';

import { OpenCVServiceService } from './open-cvservice.service';

describe('OpenCVServiceService', () => {
  let service: OpenCVServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenCVServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
