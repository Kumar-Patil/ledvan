import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '../common/api.service';
import { of } from 'rxjs';
import { Districts, Area } from '../dashboard/district/mock.district';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }
  public getById(apiName: any, id: any) {
    const requestUrl = this.apiService.API_BASE_URL + apiName + '/' + id;
    return this.httpClient.get(requestUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })/*,
      params: new HttpParams().set('id', id)*/
    });
  }

  public getAll(apiName: any) {
    const requestUrl = this.apiService.API_BASE_URL + apiName;
    const loggedInUserId = 1;
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.get(requestUrl,{
      headers: new HttpHeaders({
      }).set('Content-Type', 'application/json').set('loggedInUserId', loggedInUserId.toString())/*,
      params: new HttpParams().set('id', id)*/
    });
    // return of(Districts);
  }

  public put(apiName: any, id: any, data: any) {
    const requestUrl = this.apiService.API_BASE_URL + apiName + '/' + id;
    return this.httpClient.put(requestUrl, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  public post(apiName: any, data: any) {
    const requestUrl = this.apiService.API_BASE_URL + apiName;
    return this.httpClient.post(requestUrl, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  public delete(apiName: any, id: any) {
    const requestUrl = this.apiService.API_BASE_URL + apiName + '/' + id;
    return this.httpClient.delete(requestUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
