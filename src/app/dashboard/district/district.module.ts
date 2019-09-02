import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictRoutingModule } from './district-routing.module';
import { DistrictComponent } from './district.component';
import { CreateDistrictComponent } from './create-district/create-district.component';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';

import { ViewDistrictComponent } from './view-district/view-district.component';

@NgModule({
  declarations: [DistrictComponent, CreateDistrictComponent, ViewDistrictComponent],
  imports: [
    CommonModule,
    DistrictRoutingModule,
    AngularMyDatePickerModule,
    FormsModule,
    NgbModule,
    SelectDropDownModule,
    HttpClientModule,
    TableModule,
    PaginatorModule
  ]
})
export class DistrictModule { }
