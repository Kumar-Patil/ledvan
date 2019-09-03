import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictComponent } from './district.component';
import { CreateDistrictComponent } from './create-district/create-district.component';
import { ViewDistrictComponent } from './view-district/view-district.component';


const routes: Routes = [
  {
    path: '', component: DistrictComponent,
    children: [
      {
        path: 'createDistrict',
        component: CreateDistrictComponent
      },
      {
        path: 'viewDistrict',
        component: ViewDistrictComponent
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
export class DistrictRoutingModule { }
