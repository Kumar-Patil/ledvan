import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public API_BASE_URL = 'http://localhost:8088/api/v1/';
  // District API
  public API_DISTRICT_API = 'district';
  public API_AREA_API = 'area';
}
