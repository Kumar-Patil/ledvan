import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material-module';
import { DistrictComponent } from './district/district.component';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LedVehicleTabComponent } from './led-vehicle-tab/led-vehicle-tab.component';
import { CreateVehicleComponent } from './led-vehicle-tab/create-vehicle/create-vehicle.component';

@NgModule({
  declarations: [DashboardComponent, MydashboardComponent, DistrictComponent, LedVehicleTabComponent, CreateVehicleComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    AngularMyDatePickerModule,
    FormsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
