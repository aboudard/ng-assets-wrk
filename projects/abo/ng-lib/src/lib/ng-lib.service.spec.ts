import { TestBed } from '@angular/core/testing';

import { NgLibService } from './ng-lib.service';

describe('NgLibService', () => {
  let service: NgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
