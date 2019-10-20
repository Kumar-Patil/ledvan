import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DistrictService } from '../district.service';
import { HttpService } from '../../../common/http.service';
import { ApiService } from '../../../common/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationDialogService } from '../../../confirmation-dialog/confirmation-dialog.service';
import { AlertService } from '../../../_alert';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-display',
  templateUrl: './view-district.component.html',
  styleUrls: ['./view-district.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewDistrictComponent implements OnInit {

  districts: any;
  cols: any[];
  constructor(private districtService: DistrictService,
              private httpService: HttpService, private apiService: ApiService,
              private spinner: NgxSpinnerService, private confirmationDialogService: ConfirmationDialogService,
              private alertService: AlertService, private router: Router,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.cols = [
      { field: 'districtName', header: 'District Name' },
      { field: 'delete', header: '' },
    ];
    this.spinner.show();
    this.getAllDistricts();
  }

  createDistrict(): any {
    this.router.navigateByUrl('dashboard/district/createDistrict');
  }

  getAllDistricts() {
    this.httpService.getAll(this.apiService.API_DISTRICT_API).subscribe((data) => {
      if (data) {
        this.districts = data;
        this.spinner.hide();
      }
    }, error => {
      console.log(error);
    });
  }
  delete(district) {
    this.openConfirmationDialog(district);
  }

  public openConfirmationDialog(district: any) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete?')
      .then((confirmed) => this.deleteById(confirmed, district))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
  edit() {
    alert('edit');
  }

  deleteById(confirmed, district: any) {
    if (confirmed) {
      this.httpService.delete(this.apiService.API_DISTRICT_API, district.id).subscribe((data) => {
        if (data) {
          this.alertService.success('District deleted successfully');
          this.autoHideMessage();
        }
      }, error => {
        this.alertService.error('Error while deleting district {}' + district.districtName);
        console.log(error);
      });
    }
  }
  autoHideMessage() {
    setTimeout(() => {
      this.alertService.clear();
      this.getAllDistricts();
    }, 1000);
  }
}
export interface District {
  id;
  districtName;
}
