import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
{path:"", pathMatch:"full", component:CarComponent},
{path:"rentals", pathMatch:"full", component:RentalComponent},
{path:"cars/brands/:brandId", pathMatch:"full", component:CarComponent},
{path:"cars/cardetail/:carId", pathMatch:"full", component:CarCardComponent},
{path:"cars/colors/:colorId", pathMatch:"full", component:CarComponent},
{
  path: 'car/:carId',
  pathMatch: 'full',
  component: CarDetailsComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
