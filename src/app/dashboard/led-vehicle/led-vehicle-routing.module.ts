import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LedVehicleComponent } from './led-vehicle.component';
import { CreateDisplayComponent } from './create-display/create-display.component';


const routes: Routes = [
  {
    path: '', component: LedVehicleComponent,
    children: [
      {
          path: '',
          component: CreateDisplayComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LedVehicleRoutingModule { }
