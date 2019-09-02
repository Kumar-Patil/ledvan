import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import {LedVehicleService} from '../led-vehicle.service';
@Component({
    selector: 'app-unreviewed-display',
    templateUrl: './unreviewed-display.component.html',
    styleUrls: ['./unreviewed-display.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnreviewedDisplayComponent implements OnInit {

    users: User[];

    cols: any[];

    constructor(private ledVehicleService: LedVehicleService) {

    }
    ngOnInit() {

        this.ledVehicleService.getUnreviewedDisplays().subscribe(res => {
            this.users = res;
        });
        this.cols = [
            { field: 'reportDate', header: 'Date' },
            { field: 'area', header: 'Area' },
            { field: 'vehicle', header: 'Vehicle No' },
            { field: 'displayTime', header: 'Display Time' },
            { field: 'delete', header: '' },
        ];
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
