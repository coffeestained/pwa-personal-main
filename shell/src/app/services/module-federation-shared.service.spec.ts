import { TestBed } from '@angular/core/testing';

import { ModuleFederationSharedService } from './module-federation-shared.service';

describe('ModuleFederationSharedService', () => {
  let service: ModuleFederationSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleFederationSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
