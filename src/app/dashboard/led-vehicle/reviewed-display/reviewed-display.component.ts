import { Component, OnInit } from '@angular/core';
import { LedVehicleService } from '../led-vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviewed-display',
  templateUrl: './reviewed-display.component.html',
  styleUrls: ['./reviewed-display.component.scss']
})
export class ReviewedDisplayComponent implements OnInit {
  cols: any[];
  users: any[];
  constructor(private ledVehicleService: LedVehicleService, private router: Router) { }

  ngOnInit() {
    this.ledVehicleService.getReviewedDisplays().subscribe(res => {
      this.users = res;
    });
    this.cols = [
        { field: 'reportDate', header: 'Date' },
        { field: 'vechicleStayArea', header: 'Area' },
        { field: 'vechicleNo', header: 'Vehicle No' },
        { field: 'reportingTime', header: 'Display Time' },
        { field: 'status', header: 'Reviews' },
    ];
  }

  createDisplay() {
    this.router.navigateByUrl('dashboard/ledVehicle/createDisplay');
  }

  unreviewedDisplay() {
    this.router.navigateByUrl('dashboard/ledVehicle/unreviewedDisplay');
  }
}
