import { TestBed } from '@angular/core/testing';

import { CategoryStateServiceService } from './category-service.service';

describe('CategoryServiceService', () => {
  let service: CategoryStateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryStateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
