import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PanelUsers } from './mock.panel-users';
import { ApiService } from 'src/app/common/api.service';
import { HttpService } from '../../common/http.service';

@Injectable({
    providedIn: 'root'
})
export class PanelUsersService {

    constructor(private httpClient: HttpService, private apiService: ApiService) { }

    getPanelUsers(): Observable<any> {
        // return of(PanelUsers);
        return this.httpClient.getAll(this.apiService.API_PANEL_USERS);
    }

    createPanelUser(data: any) {
        return this.httpClient.post(this.apiService.API_PANEL_USERS, data);
    }

    deletePanelUser(id: string): Observable<any> {
        return this.httpClient.delete(this.apiService.API_PANEL_USERS, id);
    }


}
