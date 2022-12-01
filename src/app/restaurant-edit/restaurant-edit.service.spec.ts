import { TestBed, inject } from '@angular/core/testing';

import { RestaurantEditService } from './restaurant-edit.service';

describe('RestaurantEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestaurantEditService]
    });
  });

  it('should be created', inject([RestaurantEditService], (service: RestaurantEditService) => {
    expect(service).toBeTruthy();
  }));
});
