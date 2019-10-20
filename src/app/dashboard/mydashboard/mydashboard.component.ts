import { Component, OnInit } from '@angular/core';
import { DashBoardService } from '../dashboard.service';

@Component({
  selector: 'app-mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.scss']
})
export class MydashboardComponent implements OnInit {

  constructor(private dashboardService: DashBoardService) { }

  areaCount: number;
  districtCount: number;
  reviewedReportsCount: number;
  unReviewedReportsCount: number;
  usersCount: number;
  vehiclesCount: number;


  ngOnInit() {
    this.getTileDetails();
  }

  getTileDetails() {
    this.dashboardService.getAreasCount().subscribe((data: any) => {
      if (data) {
        this.areaCount = data.count;
      }
    });
    this.dashboardService.getDistrictsCount().subscribe((data: any) => {
      if (data) {
        this.districtCount = data.count;
      }
    });
    this.dashboardService.getReviewedReportsCount().subscribe((data: any) => {
      if (data) {
        this.reviewedReportsCount = data.count;
      }

    });
    this.dashboardService.getUnreviewedReportsCount().subscribe((data: any) => {
      if (data) {
        this.unReviewedReportsCount = data.count;
      }

    });
    this.dashboardService.getUsersCount().subscribe((data: any) => {
      if (data) {
        this.usersCount = data.count;
      }
    });
    this.dashboardService.getVehiclesCount().subscribe((data: any) => {
      if (data) {
        this.vehiclesCount = data.count;
      }
    });
  }

}
