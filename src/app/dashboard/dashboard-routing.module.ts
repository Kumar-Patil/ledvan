import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { DashboardComponent } from './dashboard.component';
import { DistrictComponent } from './district/district.component';
import { LedVehicleTabComponent } from './led-vehicle-tab/led-vehicle-tab.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
          path: '',
          component: MydashboardComponent,
          redirectTo: 'dashboard',
          pathMatch: 'full'
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
        component: LedVehicleTabComponent
      },
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
