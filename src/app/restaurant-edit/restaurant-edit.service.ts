import { Injectable } from '@angular/core';
import { Restaurant } from '../restaurant-detail/restaurant.model';
import { Observable, of } from 'rxjs';
import { RESTAURANT_LIST } from '../restaurant-list/restaurant-list.mock';

@Injectable({
  providedIn: 'root'
})
export class RestaurantEditService {

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
