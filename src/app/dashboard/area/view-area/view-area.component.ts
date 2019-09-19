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
  templateUrl: './view-area.component.html',
  styleUrls: ['./view-area.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewAreaComponent implements OnInit {

  areas: any;
  cols: any[];
  constructor(private httpService: HttpService, private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private confirmationDialogService: ConfirmationDialogService,
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.cols = [
      { field: 'areaName', header: 'Area Name' },
      { field: 'districtName', header: 'District Name' },
      { field: 'delete', header: '' }
    ];
    this.getAllAreas();
  }

  getAllAreas() {
    this.httpService.getAll(this.apiService.API_AREA_API).subscribe((data) => {
      if (data) {
        this.areas = data;
        this.spinner.hide();
      }
    }, error => {
      this.autoHideMessage();
      this.alertService.error('Error while fetching area!');
      console.log(error);
    });
  }
  delete(area) {
    this.openConfirmationDialog(area);
  }
  public openConfirmationDialog(area: any) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete?')
      .then((confirmed) => this.deleteById(confirmed, area))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
  deleteById(confirmed, area: any) {
    if (confirmed) {
      this.httpService.delete(this.apiService.API_AREA_API, area.id).subscribe((data) => {
        if (data) {
          this.alertService.success('Area deleted successfully');
          this.autoHideMessage();
        }
      }, error => {
        this.alertService.error('Error while Area district {}' + area.areaName);
        this.autoHideMessage();
        console.log(error);
      });
    }
  }
  autoHideMessage() {
    setTimeout(() => {
      this.alertService.clear();
      this.getAllAreas();
    }, 1000);
  }
}
