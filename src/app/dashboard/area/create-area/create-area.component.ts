import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../../common/http.service';
import { ApiService } from '../../../common/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationDialogService } from '../../../confirmation-dialog/confirmation-dialog.service';
import { AlertService } from '../../../_alert';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-display',
  templateUrl: './create-area.component.html',
  styleUrls: ['./create-area.component.scss']
})
export class CreateAreaComponent implements OnInit {


  areaDetails: any;
  areaName: any;
  options: any;
  isEdit = false;
  createUpdate = 'Create Area';
  areaId: any;
  @ViewChild('report', { static: false }) report: NgForm;

  config = {
    displayKey: 'districtName', // if objects array passed which key to be displayed defaults to description
    search: true, // true/false for the search functionlity defaults to false,
    height: 'auto',
    placeholder: 'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => { },
    // limitTo: this.options.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search', // label thats displayed in search input,
    searchOnKey: 'description'
  };
  constructor(private httpService: HttpService, private apiService: ApiService,
              private spinner: NgxSpinnerService,
              private confirmationDialogService: ConfirmationDialogService,
              private alertService: AlertService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.spinner.show();
    // tslint:disable-next-line:no-unused-expression
    this.activatedRoute && this.activatedRoute.params.subscribe((params) => {
      this.areaId = params.id;
      if (this.areaId) {
        this.spinner.show();
        this.isEdit = true;
        this.createUpdate = 'Update Area';
        this.getAreaById(this.areaId);
      }
    });
    this.getAllDistricts();
    console.log(this.options);
  }

  create() {
    const requestObj = {
      areaName: this.areaName,
      id: 0,
      districtId: this.areaDetails.id,
      districtName: this.areaDetails.districtName
    };
    if (this.isEdit) {
      requestObj.id = this.areaId;
    }
    this.httpService.post(this.apiService.API_AREA_API, requestObj).subscribe((data) => {
      if (data) {
        this.autoHideMessage();
        if (this.isEdit) {
          this.alertService.success('sucessfully updated area');
        } else {
          this.alertService.success('sucessfully created area');
        }
      }
    }, error => {
      this.autoHideMessage();
      this.alertService.error('Error while creating area!');
      console.log(error);
    });
  }

  getAllDistricts() {
    this.httpService.getAll(this.apiService.API_DISTRICT_API).subscribe((data) => {
      if (data) {
        const result = [];
        // tslint:disable-next-line:forin
        for (const val in data) {
          result.push(data[val]);
        }
        this.options = result;
        this.spinner.hide();
      }
    }, error => {
      console.log(error);
    });
  }
  autoHideMessage() {
    setTimeout(() => {
      this.alertService.clear();
      this.router.navigateByUrl('dashboard/area/viewarea');
    }, 1000);
  }

  getAreaById(areaId: any) {
    this.httpService.getById(this.apiService.API_AREA_API, areaId).subscribe((data) => {
      if (data) {
        this.areaDetails = data;
        this.areaName = this.areaDetails.areaName;
        this.spinner.hide();
      }
    }, error => {
      this.autoHideMessage();
      this.alertService.error('Error while featching area!');
      console.log(error);
    });
  }

  cancel() {
    this.router.navigateByUrl('dashboard/area/viewarea');
  }
}
