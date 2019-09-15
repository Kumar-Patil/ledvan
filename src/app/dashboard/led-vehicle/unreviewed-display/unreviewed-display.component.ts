import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import {LedVehicleService} from '../led-vehicle.service';
@Component({
    selector: 'app-unreviewed-display',
    templateUrl: './unreviewed-display.component.html',
    styleUrls: ['./unreviewed-display.component.css']
})
export class UnreviewedDisplayComponent implements OnInit {

    users: User[];

    cols: any[];

    constructor(private ledVehicleService: LedVehicleService) {

    }
    ngOnInit() {

        this.cols = [
            { field: 'reportDate', header: 'Date' },
            { field: 'districtAreaName', header: 'Area' },
            { field: 'vechicleNo', header: 'Vehicle No' },
            { field: 'reportingTime', header: 'Display Time' },
            { field: 'delete', header: '' },
        ];

        this.ledVehicleService.getUnreviewedDisplays().subscribe(res => {
            this.users = res;
        });
    }

    /**
     * delete
     */
    public delete(user) {
        console.log('About to delete an user: ' + JSON.stringify(user));
        this.ledVehicleService.deleteUser(user).subscribe(res => {
            // success block delete user
        });
    }
}

export interface User {
    id;
    name;
    email;
}
