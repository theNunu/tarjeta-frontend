import { TestBed } from '@angular/core/testing';

import { CreditCardStoreService } from './credit-card-store.service';

describe('CreditCardStoreService', () => {
  let service: CreditCardStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
