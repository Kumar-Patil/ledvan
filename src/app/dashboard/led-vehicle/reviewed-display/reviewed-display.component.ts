import { Component, OnInit } from '@angular/core';
import { LedVehicleService } from '../led-vehicle.service';

@Component({
  selector: 'app-reviewed-display',
  templateUrl: './reviewed-display.component.html',
  styleUrls: ['./reviewed-display.component.css']
})
export class ReviewedDisplayComponent implements OnInit {
  cols: any[];
  users: any[];
  constructor(private ledVehicleService: LedVehicleService) { }

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

}
