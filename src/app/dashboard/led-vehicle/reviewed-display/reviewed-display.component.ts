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
        { field: 'area', header: 'Area' },
        { field: 'vehicle', header: 'Vehicle No' },
        { field: 'displayTime', header: 'Display Time' },
        { field: 'review', header: 'Reviews' },
    ];
  }

}
