import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetailDto } from '../models/rentalDetailDto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl:string="https://localhost:44395/api/";
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"rentals/getall";
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }

  getRentalDetails():Observable<ListResponseModel<RentalDetailDto>>{
    let newPath=this.apiUrl+"rentals/rentaldetails";
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath)
  }

  getRentalByCarId(carId:number):Observable<ListResponseModel<RentalDetailDto>>{
    let newPath = this.apiUrl+"rentals/rentalbycarid?carId="+ carId;
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath)
  }
}
