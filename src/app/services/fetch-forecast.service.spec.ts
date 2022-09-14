import { TestBed } from '@angular/core/testing';

import { FetchForecastService } from './fetch-forecast.service';

describe('FetchForecastService', () => {
  let service: FetchForecastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchForecastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
