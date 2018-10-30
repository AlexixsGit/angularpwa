import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { UsersComponent } from './users/users.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/restaurantList', pathMatch: 'full' },
    { path: 'restaurantList', component: RestaurantListComponent },
    { path: 'restaurantsDetail/:id', component: RestaurantDetailComponent },
    { path: 'users', component: UsersComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }