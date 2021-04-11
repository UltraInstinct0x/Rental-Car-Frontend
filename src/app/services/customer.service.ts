import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerDetailDto } from '../models/customerDetailDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl:string="https://localhost:44395/api/";

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl +"getall";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  getCustomersDetails():Observable<ListResponseModel<CustomerDetailDto>>{
    let newPath = this.apiUrl +"getdetails";
    return this.httpClient.get<ListResponseModel<CustomerDetailDto>>(newPath);
  }
  getCustomerById(customerId: number): Observable<ListResponseModel<CustomerDetailDto>> {
    let newPath = this.apiUrl + 'getdetailsbyid?id=' + customerId;
    return this.httpClient.get<ListResponseModel<CustomerDetailDto>>(newPath);
  }
}
