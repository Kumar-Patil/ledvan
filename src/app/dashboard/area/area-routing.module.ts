import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaComponent } from './area.component';
import { CreateAreaComponent } from './create-area/create-area.component';
import { ViewAreaComponent } from './view-area/view-area.component';

const routes: Routes = [
  {
    path: '', component: AreaComponent,
    children: [
      {
        path: 'createarea',
        component: CreateAreaComponent
      },
      {
        path: 'viewarea',
        component: ViewAreaComponent
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
export class AreaRoutingModule { }
