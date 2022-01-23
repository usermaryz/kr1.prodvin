import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTestComponent } from './form-test/form-test.component';
import { RouteTestComponent } from './route-test/route-test.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarComponent } from './car/car.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ErrorComponent } from './error/error.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'item/:id', component: RouteTestComponent },
  { path: 'car/add', component: AddCarComponent },
  { path: 'form/add', component: FormTestComponent},
  { path: 'car/:id', component: CarComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'aboutme', component: AboutMeComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
