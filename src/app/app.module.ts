import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormTestComponent } from './form-test/form-test.component';
import { SecondTestComponent } from './second-test/second-test.component';
import { DataService } from './services/data.service';
import { DataShowComponent } from './data-show/data-show.component';
import { RouteTestComponent } from './route-test/route-test.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTestComponent,
    SecondTestComponent,
    DataShowComponent,
    RouteTestComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    AboutMeComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
