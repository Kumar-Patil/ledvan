import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaComponent } from './area.component';
import { CreateAreaComponent } from './create-area/create-area.component';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';

import { ViewAreaComponent } from './view-area/view-area.component';

@NgModule({
  declarations: [AreaComponent, CreateAreaComponent, ViewAreaComponent],
  imports: [
    CommonModule,
    AreaRoutingModule,
    AngularMyDatePickerModule,
    FormsModule,
    NgbModule,
    SelectDropDownModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
  ]
})
export class AreaModule { }
