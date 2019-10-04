import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public API_BASE_URL = 'http://ec2-52-15-97-155.us-east-2.compute.amazonaws.com:8080/stageapi/api/v1/';
  //public API_BASE_URL = 'http://localhost:80/stageapi/api/v1/';
  // District API
  public API_DISTRICT_API = 'district';
  public API_ROUTES_API = 'routes';
  public API_AREA_API = 'area';

  //Dashboard APIs
  public API_AREA_COUNT = 'dashboard/areacount';
  public API_DISTRICT_COUNT = 'dashboard/districtcount';
  public API_PANEL_USER_COUNT = 'dashboard/panelusercount';
  public API_REVIEWED_REPORT_COUNT = 'dashboard/reportcount/revieddreport';
  public API_UNREVIEWED_REPORT_COUNT = 'dashboard/reportcount/unreviedreport';
  public API_VEHICLE_COUNT = 'dashboard/vechiclecount';

  // Panel Users APIs

  public API_PANEL_USERS = 'panel';


  // LED Display APIs

  public API_LED_DISPLAY = 'leddisplay';
  public API_LED_DISPLAY_REVIEWED = 'leddisplay/reviewed';
  public API_LED_DISPLAY_UN_REVIEWED = 'leddisplay/unReviewed';

  // SMTP
  public API_SMTP = 'smtp';

}
