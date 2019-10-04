import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material-module';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LedVehicleTabComponent } from './led-vehicle-tab/led-vehicle-tab.component';
import { CreateVehicleComponent } from './led-vehicle-tab/create-vehicle/create-vehicle.component';
import { TableModule } from 'primeng/table';
import { CalendarModule, SharedModule} from 'primeng/primeng';
import { RouteMapComponent } from './route-map/route-map.component';
import { UploadRouteMapComponent } from './route-map/upload-route-map/upload-route-map.component';
import { ViewRoutesComponent } from './route-map/view-routes/view-routes.component';
import { PanelUsersComponent } from './panel-users/panel-users.component';
import { CreatePanelUsersComponent } from './panel-users/create-panel-users/create-panel-users.component';
import { ViewPanelUsersComponent } from './panel-users/view-panel-users/view-panel-users.component';
import { PdfReportsComponent } from './pdf-reports/pdf-reports.component';
import { DailyReportComponent } from './pdf-reports/daily-report/daily-report.component';
import { MonthlyReportComponent } from './pdf-reports/monthly-report/monthly-report.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { UpdateSmtpComponent } from './email-settings/update-smtp/update-smtp.component';
import {PaginatorModule} from 'primeng/paginator';
import { ViewVehiclesComponent } from './led-vehicle-tab/view-vehicles/view-vehicles.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { ConfirmationDialogComponent } from './../confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './../confirmation-dialog/confirmation-dialog.service';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [DashboardComponent, MydashboardComponent, LedVehicleTabComponent,
    CreateVehicleComponent, RouteMapComponent,
    UploadRouteMapComponent, ViewRoutesComponent, PanelUsersComponent, CreatePanelUsersComponent, ViewPanelUsersComponent,
    PdfReportsComponent,
    DailyReportComponent,
    MonthlyReportComponent,
    EmailSettingsComponent,
    UpdateSmtpComponent,
    ViewVehiclesComponent,
    ConfirmationDialogComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    AngularMyDatePickerModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
    SelectDropDownModule,
    NgxSpinnerModule,
  ],
  providers: [ ConfirmationDialogService ],
  entryComponents: [ ConfirmationDialogComponent ]
})
export class DashboardModule { }
