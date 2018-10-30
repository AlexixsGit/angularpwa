import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restaurant } from './restaurant.model';
import { RESTAURANT_LIST } from '../restaurant-list/restaurant-list.mock';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDetailService {

  constructor() { }

  public getRestaurantById(id: number): Observable<Restaurant> {
    let restaurantFound = null;
    RESTAURANT_LIST.forEach(restaurant => {
      if (restaurant.id === id) {
        restaurantFound = restaurant;
      }
    });
    return of(restaurantFound);
  }

}
