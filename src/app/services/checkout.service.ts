import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  apiUrl:string="https://localhost:44395/api/";
  constructor(private httpClient:HttpClient) { }
  payment(): Observable<ResponseModel> {
    let newPath= this.apiUrl+"payments/payment";
    return this.httpClient.get<ResponseModel>(newPath);
  }
}
