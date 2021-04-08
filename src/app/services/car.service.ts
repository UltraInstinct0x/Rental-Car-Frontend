import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

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
  getCarDetails():Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl+"cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
}
