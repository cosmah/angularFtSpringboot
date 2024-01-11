import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';


const ApiUrlRoles = "https://localhost:8081/api/roles"

@Injectable({
  providedIn: 'root'
})
export class RolesService extends DataService{

  constructor(http:HttpClient) {
    super(ApiUrlRoles, http);
   }
}
