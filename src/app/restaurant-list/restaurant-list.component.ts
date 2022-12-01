import { Component, OnInit } from '@angular/core';
import { RestaurantListService } from './restaurant-list.service';
import { Router } from "@angular/router";
import { Restaurant } from '../restaurant-detail/restaurant.model';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurantList: Array<Restaurant>;

  constructor(private restaurantListService: RestaurantListService, private route: Router) { }

  ngOnInit() {
    this.restaurantListService.loadRestaurants().subscribe(list => {
      this.restaurantList = list;
      console.log(list);
    }, error => {
      console.log(error);
    })
  }
}
