import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../../../common/http.service';
import { ApiService } from '../../../common/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationDialogService } from '../../../confirmation-dialog/confirmation-dialog.service';
import { AlertService } from '../../../_alert';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-smtp',
  templateUrl: './update-smtp.component.html',
  styleUrls: ['./update-smtp.component.scss']
})

export class UpdateSmtpComponent implements OnInit {

  emailDetails: any;
  emailUpdated: any;
  
  constructor(private httpService: HttpService, private apiService: ApiService,
    private spinner: NgxSpinnerService,
    private confirmationDialogService: ConfirmationDialogService,
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.spinner.show();
    this.getEmailDetails();
  }

  getEmailDetails() {
    this.httpService.getAll(this.apiService.API_SMTP).subscribe((data) => {
      if (data) {
        this.emailDetails = data;
        this.spinner.hide();
      }
    }, error => {
      console.log(error);
    });
  }
  updateSMTP() {
    const requestObject = {
      id: this.emailUpdated.id,
      hostName: this.emailUpdated.hostName,
      hostPort: this.emailUpdated.hostPort,
      useSSL: this.emailUpdated.useSSL,
      fromEmail: this.emailUpdated.fromEmail,
      fromName: this.emailUpdated.fromName,
      emailPassword: this.emailUpdated.emailPassword,
      toEmail: this.emailUpdated.toEmail,
      emailDefaultSubject: this.emailUpdated.emailDefaultSubject,
      emailDefaultBody: this.emailUpdated.emailDefaultBody
    };
  }
}
