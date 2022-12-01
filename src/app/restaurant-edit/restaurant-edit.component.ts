import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant-detail/restaurant.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantDetailService } from '../restaurant-detail/restaurant-detail.service';
import { RestaurantEditService } from './restaurant-edit.service';

@Component({
  selector: 'app-restaurant-edit',
  templateUrl: './restaurant-edit.component.html',
  styleUrls: ['./restaurant-edit.component.css']
})
export class RestaurantEditComponent implements OnInit {

  private restaurantId: number;
  public foundRestaurant: Restaurant;

  constructor(private activateRoute: ActivatedRoute, private restaurantEditService: RestaurantEditService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(p => {
      this.restaurantId = Number(p.get('id'));
      this.restaurantEditService.getRestaurantById(this.restaurantId).subscribe(found => {
        this.foundRestaurant = found;
        console.log(this.foundRestaurant);
      }, error => {
        console.log(error);
      });
    })
  }
}
