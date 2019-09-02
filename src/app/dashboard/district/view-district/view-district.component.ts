import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DistrictService } from '../district.service';
import { HttpService } from '../../../common/http.service';
import { ApiService } from '../../../common/api.service';

@Component({
  selector: 'app-create-display',
  templateUrl: './view-district.component.html',
  styleUrls: ['./view-district.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewDistrictComponent implements OnInit {

  districts: any;
  cols: any[];
  constructor(private districtService: DistrictService,
    private httpService: HttpService, private apiService: ApiService
  ) { }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'districtName', header: 'District Name' }
    ];
    this.getAllDistricts();
  }

  getAllDistricts() {
    this.httpService.getAll(this.apiService.API_DISTRICT_API).subscribe((data) => {
      if (data) {
        this.districts = data;
      }
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