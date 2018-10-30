import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../restaurant-detail/restaurant.model';
import { RESTAURANT_LIST } from './restaurant-list.mock';

@Injectable({
  providedIn: 'root'
})
export class RestaurantListService {

  constructor(private http: HttpClient) { }


  public loadRestaurants(): Observable<Restaurant[]> {
    return of(RESTAURANT_LIST);
  }
}
