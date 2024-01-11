import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

const ApiUrlUser = "https://localhost:8081/api/user"

@Injectable({
  providedIn: 'root'
})

export class UserService extends DataService {

  constructor(http: HttpClient) {
    super(ApiUrlUser, http);
  }
}