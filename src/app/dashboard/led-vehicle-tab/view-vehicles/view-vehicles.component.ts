import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrls: ['./view-vehicles.component.scss']
})
export class ViewVehiclesComponent implements OnInit {

  cols: any[];
  vehicleList: any[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.cols = [
      { field: 'vehicleNo', header: 'Vehicle No' },
      { field: 'districtName', header: 'District Name' },
      { field: 'areaName', header: 'Area Name' },
      { field: 'diverName', header: 'Diver Name' },
      { field: 'driverNo', header: 'Driver No' },
      { field: 'operatorName', header: 'Operator Name' },
      { field: 'operatorNo', header: 'Operator No' },
      { field: 'delete', header: '' },
    ];

    this.vehicleList = [
      {
        vehicleNo: 'JH01 CT1600',
        districtName: 'Bokaro',
        areaName: 'Bokaro',
        diverName: 'SANDEEP NAYAK',
        driverNo: '8826256078',
        operatorName: 'Raj Kumar',
        operatorNo: '7250239544',
        id: 'Bokaro'
      },
      {
        vehicleNo: 'JH01 DD6802',
        districtName: 'Simdega',
        areaName: 'Simdega',
        diverName: 'RAJAT SORENG',
        driverNo: '8084711009',
        operatorName: 'Ajay Toppo',
        operatorNo: '9430163306',
        id: 'Simdega'
      }
    ];
  }

  createVehicle() {
    this.router.navigateByUrl('dashboard/createVehicle');
  }
}
