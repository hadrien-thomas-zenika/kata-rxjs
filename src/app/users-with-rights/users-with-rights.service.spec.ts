import { TestBed } from '@angular/core/testing';

import { UsersWithRightsService } from './users-with-rights.service';

describe('UsersWithRightsService', () => {
  let service: UsersWithRightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersWithRightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
