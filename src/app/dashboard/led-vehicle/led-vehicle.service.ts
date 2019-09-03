import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Unreviewed } from './mock.unreviewed';
import { Reviewed } from './mock.reviewed';


@Injectable({
  providedIn: 'root'
})
export class LedVehicleService {

  constructor(private http: HttpClient) { }

  createReport(report: any): Observable<any> {

    return of({});
  }

  getUnreviewedDisplays(): Observable<any> {
    return of(Unreviewed);
  }

  
  getReviewedDisplays(): Observable<any> {
    return of(Reviewed);
  }

  deleteUser(user: any): Observable<any> {
    return of();
  }
}
