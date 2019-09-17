import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '../common/api.service';
import { of } from 'rxjs';

@Injectable()
export class DashBoardService {

    constructor(private httpClient: HttpClient, private apiService: ApiService) {
    }

    public getDistrictsCount() {
        const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_DISTRICT_COUNT;
        return this.httpClient.get(requestUrl);
        // return of({ count: 30 });
    }

    public getAreasCount() {
        const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_AREA_COUNT;
        return this.httpClient.get(requestUrl);
        // return of({ count: 30 });
      }

      public getVehiclesCount() {
        const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_VEHICLE_COUNT;
        return this.httpClient.get(requestUrl);
        // return of({ count: 30 });
      }

      public getUsersCount() {
        const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_PANEL_USER_COUNT;
        return this.httpClient.get(requestUrl);
        // return of({ count: 30 });
      }

      public getUnreviewedReportsCount() {
        const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_UNREVIEWED_REPORT_COUNT;
        return this.httpClient.get(requestUrl);
        // return of({ count: 30 });
      }

      public getReviewedReportsCount() {
        const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_REVIEWED_REPORT_COUNT;
        return this.httpClient.get(requestUrl);
        // return of({ count: 30 });
      }

}
