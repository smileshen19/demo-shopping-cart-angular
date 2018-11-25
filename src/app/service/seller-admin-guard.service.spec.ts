import { TestBed } from '@angular/core/testing';

import { SellerAdminGuardService } from './seller-admin-guard.service';

describe('SellerAdminGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerAdminGuardService = TestBed.get(SellerAdminGuardService);
    expect(service).toBeTruthy();
  });
});
