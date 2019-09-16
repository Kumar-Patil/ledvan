import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PanelUsers } from './mock.panel-users';
import { ApiService } from 'src/app/common/api.service';


@Injectable({
    providedIn: 'root'
})
export class PanelUsersService {

    constructor(private httpClient: HttpClient, private apiService: ApiService) { }

    getPanelUsers(): Observable<any> {
        // return of(PanelUsers);
        const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_PANEL_USER_COUNT;
        return this.httpClient.get(requestUrl);
    }

    createPanelUser(data: any) {
        const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_PANEL_USER_COUNT;
        return this.httpClient.post(requestUrl, data);
    }

    deletePanelUser(id: string): Observable<any> {
        const requestUrl = this.apiService.API_BASE_URL + this.apiService.API_PANEL_USER_COUNT + '/' +id;
        return this.httpClient.delete(requestUrl);
    }


}
