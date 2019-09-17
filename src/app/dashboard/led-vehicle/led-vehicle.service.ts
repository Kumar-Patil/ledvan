import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Unreviewed } from './mock.unreviewed';
import { Reviewed } from './mock.reviewed';
import { ApiService } from 'src/app/common/api.service';


@Injectable({
  providedIn: 'root'
})
export class LedVehicleService {

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  createReport(report: any): Observable<any> {
    const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_LED_DISPLAY;
    return this.httpClient.post(requestUrl, report);
    // return of({});
  }

  getUnreviewedDisplays(): Observable<any> {
    const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_LED_DISPLAY_UN_REVIEWED;
    return this.httpClient.get(requestUrl);
    // return of(Unreviewed);
  }


  getReviewedDisplays(): Observable<any> {
    const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_LED_DISPLAY_REVIEWED;
    return this.httpClient.get(requestUrl);
    // return of(Reviewed);
  }

  deleteUser(user: any): Observable<any> {
    const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_LED_DISPLAY + '/'+user.id;
    return this.httpClient.delete(requestUrl);
    // return of();
  }
}
