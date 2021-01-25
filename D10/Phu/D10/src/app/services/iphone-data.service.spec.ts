import { TestBed } from '@angular/core/testing';

import { IphoneDataService } from './iphone-data.service';

describe('IphoneDataService', () => {
  let service: IphoneDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IphoneDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
