import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LedVehicleComponent } from './led-vehicle.component';
import { CreateDisplayComponent } from './create-display/create-display.component';
import { UnreviewedDisplayComponent } from './unreviewed-display/unreviewed-display.component';
import { ReviewedDisplayComponent } from './reviewed-display/reviewed-display.component';


const routes: Routes = [
  {
    path: '', component: LedVehicleComponent,
    children: [
      {
        path: 'createDisplay',
        component: CreateDisplayComponent
      },
      {
        path: 'unreviewedDisplay',
        component: UnreviewedDisplayComponent,
      },
      {
        path: 'reviewedDisplay',
        component: ReviewedDisplayComponent,
      },
      {
        path: '', redirectTo: 'createDisplay', pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LedVehicleRoutingModule { }
