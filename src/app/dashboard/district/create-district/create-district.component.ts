import { Component, OnInit, ViewChild, } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { NgForm } from '@angular/forms';
import { DistrictService } from '../district.service';
import { HttpService } from '../../../common/http.service';
import { ApiService } from '../../../common/api.service';
import { AlertService } from '../../../_alert';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-create-display',
  templateUrl: './create-district.component.html',
  styleUrls: ['./create-district.component.css']
})
export class CreateDistrictComponent implements OnInit {

  @ViewChild('district', { static: false }) report: NgForm;

  districtName: any;
  districtData: any;
  id: any;
  districtId: any;
  isEdit = false;
  createUpdate = 'Create District';
  constructor(private districtService: DistrictService,
    private httpService: HttpService, private apiService: ApiService,
              private router: Router,
    // tslint:disable-next-line:align
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    this.activatedRoute && this.activatedRoute.params.subscribe((params) => {
      this.districtId = params.id;
      if (this.districtId) {
        this.spinner.show();
        this.isEdit = true;
        this.createUpdate = 'Update District';
        this.getDistrictById(this.districtId);
      }
    });
  }

  create() {
    const requestObj = {
      districtName: this.districtName,
      id: 0
    };
    if (this.isEdit) {
      requestObj.id = this.districtId;
    }
    this.httpService.post(this.apiService.API_DISTRICT_API, requestObj).subscribe((data) => {
      if (data) {
        this.autoHideMessage();
        if (this.isEdit) {
          this.alertService.success('sucessfully updated district');
        } else {
          this.alertService.success('sucessfully created district');
        }
      }
    }, error => {
      this.autoHideMessage();
      this.alertService.error('Error while creating district!');
      console.log(error);
    });
  }

  autoHideMessage() {
    setTimeout(() => {
      this.alertService.clear();
      this.router.navigateByUrl('dashboard/district/viewDistrict');
    }, 1000);
  }
  edit(district: any) {
    console.log('Edit here' + district.id);
  }

  getDistrictById(districtId: any) {
    this.httpService.getById(this.apiService.API_DISTRICT_API, districtId).subscribe((data) => {
      if (data) {
        this.districtData = data;
        this.districtName = this.districtData.districtName;
        this.spinner.hide();
      }
    }, error => {
      this.alertService.error('Error while featching district!');
      console.log(error);
    });
  }

}
