import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { DashboardComponent } from './dashboard.component';
import { DistrictComponent } from './district/district.component';
import { LedVehicleTabComponent } from './led-vehicle-tab/led-vehicle-tab.component';
import { CreateAreaComponent } from './area/create-area/create-area.component';
import { ViewAreaComponent } from './area/view-area/view-area.component';
import { CreateVehicleComponent } from './led-vehicle-tab/create-vehicle/create-vehicle.component';
import { CreatePanelUsersComponent } from './panel-users/create-panel-users/create-panel-users.component';
import { ViewPanelUsersComponent } from './panel-users/view-panel-users/view-panel-users.component';
import { DailyReportComponent } from './pdf-reports/daily-report/daily-report.component';
import { MonthlyReportComponent } from './pdf-reports/monthly-report/monthly-report.component';
import { UpdateSmtpComponent } from './email-settings/update-smtp/update-smtp.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
          path: '',
          component: MydashboardComponent
      },
      {
        path: 'district',
        component: DistrictComponent,
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
        path: 'createArea',
        component: CreateAreaComponent
      },
      {
        path: 'viewAreas',
        component: ViewAreaComponent
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
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
