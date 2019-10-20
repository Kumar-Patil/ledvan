import { Component, OnInit } from '@angular/core';
import { PanelUsersService } from '../panel-users.service';
import { HttpService } from '../../../common/http.service';
import { ApiService } from '../../../common/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationDialogService } from '../../../confirmation-dialog/confirmation-dialog.service';
import { AlertService } from '../../../_alert';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-panel-users',
  templateUrl: './create-panel-users.component.html',
  styleUrls: ['./create-panel-users.component.scss']
})
export class CreatePanelUsersComponent implements OnInit {


  userDetails: any = {};
  options: any;
  districtDetails: any;
  areaDetails: any;
  panelUserId: any;
  isEdit = false;
  createUpdate = 'Create Panel User';
  config = {
    displayKey: 'districtName', // if objects array passed which key to be displayed defaults to name
    search: true, // true/false for the search functionlity defaults to false,
    height: '200px',
    placeholder: 'Select Districts', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => {},
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search', // label thats displayed in search input,
    searchOnKey: 'name'
  };
  constructor(private panelUsersService: PanelUsersService,
    private httpService: HttpService,
    private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private confirmationDialogService: ConfirmationDialogService,
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.spinner.show();
    // tslint:disable-next-line:no-unused-expression
    this.activatedRoute && this.activatedRoute.params.subscribe((params) => {
      this.panelUserId = params.id;
      if (this.panelUserId) {
        this.spinner.show();
        this.isEdit = true;
        this.createUpdate = 'Update Panel User';
        this.getPanelUserById(this.panelUserId);
      }
    });
    this.getAllDistricts();
    console.log(this.options);
  }

  getPanelUserById(panelUserId: any) {
    this.httpService.getById(this.apiService.API_PANEL_USERS, panelUserId).subscribe((data) => {
      if (data) {
        this.userDetails = data;
        this.areaDetails = data;
        this.spinner.hide();
      }
    }, error => {
      this.autoHideMessage();
      this.alertService.error('Error while featching area!');
      console.log(error);
    });
  }

  autoHideMessage() {
    setTimeout(() => {
      this.alertService.clear();
      this.router.navigateByUrl('dashboard/viewPanelUser');
    }, 1000);
  }

  createUser(userDetails: any) {
    const requestObj: any = {};
    requestObj.districtName = this.areaDetails.districtName;
    requestObj.districtId = this.areaDetails.id;
    requestObj.mobileNo = userDetails.mobileNo;
    requestObj.password = userDetails.password;
    requestObj.email = userDetails.email;
    requestObj.roleId = 3;
    requestObj.roleName = 'PanelUser';
    if (this.isEdit) {
      requestObj.id = this.panelUserId;
    }
    this.httpService.post(this.apiService.API_PANEL_USERS, requestObj).subscribe((data) => {
      if (data) {
        this.autoHideMessage();
        if (this.isEdit) {
          this.alertService.success('sucessfully updated panel user');
        } else {
          this.alertService.success('sucessfully created panel user');
        }
      }
    }, error => {
      this.autoHideMessage();
      this.alertService.error('Error while creating panel user!');
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

  cancel() {
    this.router.navigateByUrl('dashboard/viewPanelUser');
  }
}
