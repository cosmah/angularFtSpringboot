import { HttpClient } from '@angular/common/http';
import {Inject, Injectable } from '@angular/core';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  //inject ApiUrl in constructor to Get it from other service
  constructor(@Inject(String) private ApiUrl: string, private http: HttpClient) { }

  //GET METHOD
  getAll(): Observable<any> {
    return this.http.get<any>(this.ApiUrl);
  }

  //GET BY ID METHOD
  get(id: any): Observable<any> {
    return this.http.get<any>(`${this.ApiUrl}/${id}`);
  }

  //update METHOD
  Update(data: any): Observable<any>{
    return this.http.put(`${this.ApiUrl}`, data);
  }

  //POST METHOD
  Create(data: any): Observable<any>{
    return this.http.post(this.ApiUrl, data);
  }

  //DELETE METHOD
  Delete(id: any): Observable<any>{
    return this.http.delete(`${this.ApiUrl}/${id}`);
  }

}
