import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LedVehicleService {

  constructor(private http: HttpClient) { }

  createReport(report: any): Observable<any> {

    return of({});
  }
}
