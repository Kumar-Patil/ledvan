import { Component, OnInit } from '@angular/core';
import { IAngularMyDpOptions } from 'angular-mydatepicker';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css']
})
export class DailyReportComponent implements OnInit {

  date = null;
  myDateInit = true;
  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd-mm-yyyy'
    // other options are here...
  };
  constructor() { }

  ngOnInit() {
    if (this.myDateInit) {
      // Initialize to specific date (14.05.2019) with IMyDate object
      this.date = {
        isRange: false,
        singleDate: {
          date: {
            year: 2019,
            month: 5,
            day: 14
          }
        }
      };
    } else {
      // Initialize to today with javascript date object
      this.date = { isRange: false, singleDate: { jsDate: new Date() } };
    }
  }

}
