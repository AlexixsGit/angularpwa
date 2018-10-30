import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Restaurant } from './restaurant.model';
import { RestaurantDetailService } from './restaurant-detail.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  private restaurantId: number;
  public foundRestaurant: Restaurant;

  constructor(private activateRoute: ActivatedRoute, private restaurantDetailService: RestaurantDetailService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(p => {
      this.restaurantId = Number(p.get('id'));
      this.restaurantDetailService.getRestaurantById(this.restaurantId).subscribe(found => {
        this.foundRestaurant = found;
        console.log(this.foundRestaurant);
      }, error => {
        console.log(error);
      });
    })
  }
}
