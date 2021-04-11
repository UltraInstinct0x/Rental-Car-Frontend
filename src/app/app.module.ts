import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarComponent } from './components/car/car.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { FiltercarsComponent } from './components/filtercars/filtercars.component';

import { ToastrModule } from 'ngx-toastr';
import { AddrentalComponent } from './components/addrental/addrental.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddcolorComponent } from './components/addcolor/addcolor.component';
import { AddbrandComponent } from './components/addbrand/addbrand.component';
import { AddcarComponent } from './components/addcar/addcar.component';
import { EditpageComponent } from './components/editpage/editpage.component';
import { EditbrandComponent } from './components/editpage/editbrand/editbrand.component';
import { EditcolorComponent } from './components/editpage/editcolor/editcolor.component';
import { EditcarComponent } from './components/editpage/editcar/editcar.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    NaviComponent,
    RentalComponent,
    CarComponent,
    CarCardComponent,
    CarDetailsComponent,
    ColorFilterPipe,
    BrandFilterPipe,
    CarFilterPipe,
    FiltercarsComponent,
    AddrentalComponent,
    CheckoutComponent,
    AddcolorComponent,
    AddbrandComponent,
    AddcarComponent,
    EditpageComponent,
    EditbrandComponent,
    EditcolorComponent,
    EditcarComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({positionClass:'toast-bottom-right'}),
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
