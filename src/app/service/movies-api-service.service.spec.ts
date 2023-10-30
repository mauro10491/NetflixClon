import { TestBed } from '@angular/core/testing';

import { MoviesApiServiceService } from './movies-api-service.service';

describe('MoviesApiServiceService', () => {
  let service: MoviesApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
