import { TestBed } from '@angular/core/testing';

import { SaleApiService } from './sale-api.service';

describe('SaleApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaleApiService = TestBed.get(SaleApiService);
    expect(service).toBeTruthy();
  });
});
