import { TestBed, inject } from '@angular/core/testing';

import { RestaurantDetailService } from './restaurant-detail.service';

describe('RestaurantListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantDetailService]
    });
  });

  it('should be created', inject([RestaurantDetailService], (service: RestaurantDetailService) => {
    expect(service).toBeTruthy();
  }));
});
