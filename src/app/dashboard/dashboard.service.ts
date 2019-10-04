import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '../common/api.service';
import { of } from 'rxjs';
import { HttpService } from '../common/http.service';

@Injectable()
export class DashBoardService {

    constructor(private httpClient: HttpClient, private apiService: ApiService,
      private httpService: HttpService) {
    }

    public getDistrictsCount() {
        return this.httpService.getAll(this.apiService.API_DISTRICT_COUNT);
        // return of({ count: 30 });
    }

    public getAreasCount() {
        return this.httpService.getAll(this.apiService.API_AREA_COUNT);
        // return of({ count: 30 });
      }

      public getVehiclesCount() {
        return this.httpService.getAll(this.apiService.API_VEHICLE_COUNT);
        // return of({ count: 30 });
      }

      public getUsersCount() {
        return this.httpService.getAll(this.apiService.API_PANEL_USER_COUNT);
        // return of({ count: 30 });
      }

      public getUnreviewedReportsCount() {
        return this.httpService.getAll(this.apiService.API_UNREVIEWED_REPORT_COUNT);
        // return of({ count: 30 });
      }

      public getReviewedReportsCount() {
        return this.httpService.getAll(this.apiService.API_REVIEWED_REPORT_COUNT);
        // return of({ count: 30 });
      }

}
