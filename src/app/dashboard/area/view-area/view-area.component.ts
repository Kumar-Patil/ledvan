import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../../common/http.service';
import { ApiService } from '../../../common/api.service';

@Component({
  selector: 'app-create-display',
  templateUrl: './view-area.component.html',
  styleUrls: ['./view-area.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewAreaComponent implements OnInit {

  districts: any;
  cols: any[];
  constructor(private httpService: HttpService, private apiService: ApiService
  ) { }

  ngOnInit() {
    this.cols = [
      { field: 'areaName', header: 'Area Name' },
      { field: 'districtName', header: 'District Name' },
      { field: 'delete', header: '' }
    ];
    this.getAllDistricts();
  }

  getAllDistricts() {
    this.httpService.getAllArea(this.apiService.API_DISTRICT_API).subscribe((data) => {
      // if (data) {
        this.districts = data;
      // }
    }, error => {
      console.log(error);
    });
  }
  delete() {
    console.log('Delete here');
  }

  edit() {
    console.log('Delete here');
  }

}
export interface District {
  id;
  districtName;
}
