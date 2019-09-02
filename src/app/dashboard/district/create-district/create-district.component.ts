import { Component, OnInit, ViewChild, } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { NgForm } from '@angular/forms';
import { DistrictService } from '../district.service';
import { HttpService } from '../../../common/http.service';
import { ApiService } from '../../../common/api.service';
// import { AlertService } from '../../../_alert';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-display',
  templateUrl: './create-district.component.html',
  styleUrls: ['./create-district.component.css']
})
export class CreateDistrictComponent implements OnInit {

  @ViewChild('district', { static: false }) report: NgForm;

  districtName: any;
  id: any;
  constructor(private districtService: DistrictService,
    private httpService: HttpService, private apiService: ApiService,
              private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  create() {
    const requestObj = {
      districtName: this.districtName,
    };
    this.httpService.post(this.apiService.API_DISTRICT_API, requestObj).subscribe((data) => {
      if (data) {
        // this.alertsService.success('sucessfully created!');
        this.router.navigateByUrl('dashboard/district/viewDistrict');
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
