import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetailDto } from '../models/rentalDetailDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl: string = 'https://localhost:44395/api/';
  rentalCheckout?: Rental;
  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    let newPath = this.apiUrl + 'rentals/getall';
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  getRentalDetails(): Observable<ListResponseModel<RentalDetailDto>> {
    let newPath = this.apiUrl + 'rentals/rentaldetails';
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath);
  }

  getRentalByCarId(
    carId: number
  ): Observable<ListResponseModel<RentalDetailDto>> {
    let newPath = this.apiUrl + 'rentals/rentalbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(newPath);
  }

  isAvailable(rental: Rental): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'rentals/isavailable';
    return this.httpClient.post<ResponseModel>(newPath, rental);
  }
}
