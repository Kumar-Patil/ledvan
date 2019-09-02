import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '../common/api.service';

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
    return this.httpClient.get(requestUrl);
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
