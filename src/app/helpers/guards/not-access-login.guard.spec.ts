import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { notAccessLoginGuard } from './not-access-login.guard';

describe('notAccessLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notAccessLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
