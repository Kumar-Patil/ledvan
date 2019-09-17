import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public API_BASE_URL = 'http://ec2-52-15-97-155.us-east-2.compute.amazonaws.com:8080/stageapi/api/v1/';
  // District API
  public API_DISTRICT_API = 'district';
  public API_AREA_API = 'area';
}
