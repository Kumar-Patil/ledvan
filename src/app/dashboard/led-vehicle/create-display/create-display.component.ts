import { Component, OnInit, ViewChild } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { NgForm } from '@angular/forms';
import { LedVehicleService } from '../led-vehicle.service';
import { CreateDisplayRequest, Display } from './create-display.model';
@Component({
  selector: 'app-create-display',
  templateUrl: './create-display.component.html',
  styleUrls: ['./create-display.component.css']
})
export class CreateDisplayComponent implements OnInit {

  meridian = true;
  @ViewChild('report', { static: false }) report: NgForm;
  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd-mm-yyyy'
    // other options are here...
  };

  createDisplayRequest: CreateDisplayRequest;
  myDateInit = true;
  vehicleStayArea: any;
  closingPlace: any;
  distance: any;
  options = [{id: 34, name: 'Ranchi: H2334'}, {id: 35, name: 'Gumla: H4232'}, {id: 37, name: 'Bokaro: F2342'}];
  config = {
    displayKey: 'name', // if objects array passed which key to be displayed defaults to name
    search: true, // true/false for the search functionlity defaults to false,
    height: 'auto',
    placeholder: 'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => {},
    limitTo: this.options.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search', // label thats displayed in search input,
    searchOnKey: 'name'
  };
  constructor(private ledVehicleService: LedVehicleService) {
    // this.createDisplayRequest.date = null;
    this.createDisplayRequest = new CreateDisplayRequest();
    this.createDisplayRequest.createdAt = null;
   }

  ngOnInit() {
    this.createDisplayRequest.reportingtime = { hour: 13, minute: 30 };
    this.createDisplayRequest.closingTime = { hour: 18, minute: 30 };
    this.options = [...this.options, {id: 38, name: 'Goddha: H1122'}];

    if (this.myDateInit) {
      // Initialize to specific date (14.05.2019) with IMyDate object
      this.createDisplayRequest.createdAt = {
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
      this.createDisplayRequest.createdAt = { isRange: false, singleDate: { jsDate: new Date() } };
    }
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  defaultValueSet() {
    this.createDisplayRequest.districtAreaName = '';
    this.createDisplayRequest.districtName = '';
    this.createDisplayRequest.generalHourPictureName = '';
    this.createDisplayRequest.id = 0;
    this.createDisplayRequest.kilometerPictureName = '';
    this.createDisplayRequest.reportDate = '';
    this.createDisplayRequest.status = '';
    this.createDisplayRequest.updatedAt = '';
    this.createDisplayRequest.display = [];
    const display = new Display();
    display.displayArea = '';
    display.displayPictureName = '';
    display.displayTimingTo = '';
    display.peopleViewed = '';
    this.createDisplayRequest.display.push(display);
    this.createDisplayRequest.display[0].displayPictureName = '';
    this.createDisplayRequest.display[0].displayTimingFrom = '';
    this.createDisplayRequest.display[0].displayTimingTo = '';
  }

  selectionChanged(event: Event) {
    console.log(event);
  }
  submitReport() {

    this.defaultValueSet();
    if (this.createDisplayRequest.distance) {
      this.createDisplayRequest.distance = this.createDisplayRequest.distance.toString();
    }
    const closingTime = this.createDisplayRequest.closingTime.hour + ':' + this.createDisplayRequest.closingTime.minute;
    this.createDisplayRequest.closingTime = closingTime;

    const reportingTime = this.createDisplayRequest.reportingtime.hour + ':' + this.createDisplayRequest.reportingtime.minute;
    this.createDisplayRequest.reportingtime = reportingTime;
    if (this.createDisplayRequest && this.createDisplayRequest.vehicleNo) {
      this.createDisplayRequest.vehicleNo = this.createDisplayRequest.vehicleNo.name;
    }
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:no-unused-expression
    // tslint:disable-next-line:max-line-length
    this.createDisplayRequest.createdAt = this.createDisplayRequest.createdAt.singleDate.date.year + '-' + this.createDisplayRequest.createdAt.singleDate.date.month + '-' + this.createDisplayRequest.createdAt.singleDate.date.day;
    this.ledVehicleService.createReport(this.createDisplayRequest).subscribe((res) => {

    });
    console.log('form submition');
  }
}
