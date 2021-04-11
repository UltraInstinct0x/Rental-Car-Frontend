import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl:string="https://localhost:44395/api/";
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl+"colors/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  getColorById(id:number):Observable<SingleResponseModel<Color>>{
    let newPath = this.apiUrl+"colors/getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
  }

  add(color:Color):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"colors/add",color)
  }
  update(color:Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl+"colors/update",
      color
    );
  }

  delete(color:Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl+"colors/delete",
      color
    );
  }
}
