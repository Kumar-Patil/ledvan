import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { DashboardComponent } from './dashboard.component';
import { CreateVehicleComponent } from './led-vehicle-tab/create-vehicle/create-vehicle.component';
import { CreatePanelUsersComponent } from './panel-users/create-panel-users/create-panel-users.component';
import { ViewPanelUsersComponent } from './panel-users/view-panel-users/view-panel-users.component';
import { DailyReportComponent } from './pdf-reports/daily-report/daily-report.component';
import { MonthlyReportComponent } from './pdf-reports/monthly-report/monthly-report.component';
import { UpdateSmtpComponent } from './email-settings/update-smtp/update-smtp.component';
import { ViewVehiclesComponent } from './led-vehicle-tab/view-vehicles/view-vehicles.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
          path: 'myDashboard',
          component: MydashboardComponent
      },
      {
        path: 'district',
        loadChildren: () => import(`./district/district.module`).then(m => m.DistrictModule)
      },
      {
        path: 'ledVehicle',
        loadChildren: () => import(`./led-vehicle/led-vehicle.module`).then(m => m.LedVehicleModule)
      },
      {
        path: 'createVehicle',
        component: CreateVehicleComponent
      },
      {
        path: 'area',
        loadChildren: () => import(`./area/area.module`).then(m => m.AreaModule)
      },
      {
        path: 'createPanelUser',
        component: CreatePanelUsersComponent
      },
      {
        path: 'viewPanelUser',
        component: ViewPanelUsersComponent
      },
      {
        path: 'dailyReport',
        component: DailyReportComponent
      },
      {
        path: 'monthlyReport',
        component: MonthlyReportComponent
      },
      {
        path: 'updateSMTP',
        component: UpdateSmtpComponent
      },
      {
        path: 'viewVehicle',
        component: ViewVehiclesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
