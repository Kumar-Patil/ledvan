import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PanelUsers } from './mock.panel-users';


@Injectable({
    providedIn: 'root'
})
export class PanelUsersService {

    constructor(private http: HttpClient) { }

    getPanelUsers(): Observable<any> {
        return of(PanelUsers);
    }


}
