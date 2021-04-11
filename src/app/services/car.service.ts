import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl:string="https://localhost:44395/api/";
  constructor(private httpClient:HttpClient) { }

  getAllCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetails(id:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl+"cars/getdetailsbycarid?carId=" + id;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getbycolorid?id="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getbybrandid?id="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarById(id : number):Observable<SingleResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/getcarbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath)
  }

  getByBrandAndColor(brand:string,color:string):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl+"cars/getbybrandandcolor?brand="+brand+"&color="+color;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
