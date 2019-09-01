import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { DashboardComponent } from './dashboard.component';
import { DistrictComponent } from './district/district.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
          path: '',
          component: MydashboardComponent,
      },
      {
        path: 'district',
        component: DistrictComponent,
      },
      {
        path: 'ledVehicle/createDisplay',
        loadChildren: () => import(`./led-vehicle/led-vehicle.module`).then(m => m.LedVehicleModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
