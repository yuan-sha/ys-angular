import { TestBed } from '@angular/core/testing';

import { RetrievePwdService } from './retrieve-pwd.service';

describe('RetrievePwdService', () => {
  let service: RetrievePwdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrievePwdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
