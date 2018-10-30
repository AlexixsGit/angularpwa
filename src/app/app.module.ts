import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app.routing.module';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RestaurantComponent,
    RestaurantListComponent,
    RestaurantDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
