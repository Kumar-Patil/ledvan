import { Component, OnInit, ViewChild } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { NgForm } from '@angular/forms';
import { LedVehicleService } from '../led-vehicle.service';
import { CreateDisplayRequest, Display } from './create-display.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-display',
  templateUrl: './create-display.component.html',
  styleUrls: ['./create-display.component.scss']
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
  options = [{ id: 34, name: 'Chatra : HR67B0486' },
  { id: 35, name: 'Ranchi Gramin 1 : HR67B-0692' },


  { id: 36, name: 'Saraikela : HR67B1643' },
  { id: 37, name: 'Gumla : HR67B2906' },
  { id: 38, name: 'Jamshedpur  1 : HR67B3045' },
  { id: 39, name: 'Garhwa : HR67B3164' },
  { id: 40, name: 'Godda : HR67B3248' },
  { id: 41, name: 'Deoghar : HR67B3372' },
  { id: 42, name: 'Sahebganj : HR67B4355' },
  { id: 43, name: 'Koderma : HR67B4622' },
  { id: 44, name: 'Daltonganj : HR67B5344' },
  { id: 45, name: 'Dhanbad 1 : HR67B5653' },
  { id: 46, name: 'Ramgarh : HR67B-5993' },
  { id: 47, name: 'Bokaro Gramin : HR67B7564' },
  { id: 48, name: 'Hazaribagh 2 : HR67B7610' },

  { id: 49, name: 'Giridih : HR67B8547' },
  { id: 50, name: 'Pakur : HR67B9184' },
  { id: 51, name: 'Dumka 2 : HR67B9402' },
  { id: 52, name: 'Jamtara : HR67B9813' },
  { id: 53, name: 'Dumka 1 : JH01CT0168' },
  { id: 54, name: 'Simdega : JH01CT1600' },
  { id: 55, name: 'Lohardaga : JH01CT1911' },
  { id: 56, name: 'Jamshedpur Gramin 2 : JH01CT2363' },
  { id: 57, name: 'Jamshedpur Gramin 3 : JH01CT2874' },

  { id: 58, name: 'Ranchi Gramin 2 : JH01CT4662' },
  { id: 59, name: 'Ranchi Gramin 3 : JH01CT4969' },
  { id: 60, name: 'Khunti : JH01CT5336' },
  { id: 61, name: 'Chaibasa : JH01CT5887' },

  { id: 62, name: 'Hazaribagh 1 : JH01CT7124' },
  { id: 63, name: 'Dhanbad Gramin : JH01CT7839' },
  { id: 64, name: 'Latehar : JH01CT9469' },
  { id: 65, name: 'Saraikela : JH01DA2075' },

  { id: 66, name: 'Garhwa : JH01DA5497' },
  { id: 67, name: 'Lohardaga : JH01DD0602' },
  { id: 68, name: 'Koderma : JH01DD-0638' },
  { id: 69, name: 'Sahebganj : JH01DD0840' },


  ];
  config = {
    displayKey: 'name', // if objects array passed which key to be displayed defaults to name
    search: true, // true/false for the search functionlity defaults to false,
    height: '200px',
    placeholder: 'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => { },
    limitTo: this.options.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search', // label thats displayed in search input,
    searchOnKey: 'name'
  };

  constructor(private ledVehicleService: LedVehicleService, private router: Router) {
    // this.createDisplayRequest.date = null;
    this.createDisplayRequest = new CreateDisplayRequest();
    this.createDisplayRequest.createdAt = null;
  }

  ngOnInit() {
    this.createDisplayRequest.reportingtime = { hour: 13, minute: 30 };
    this.createDisplayRequest.closingTime = { hour: 18, minute: 30 };
    this.options = [...this.options, { id: 70, name: 'Daltonganj : JH01DD0956' }];

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

  getDefaultValueSet() {

    let createDisplayRequest: any  = {}

    createDisplayRequest.districtAreaName = '';
    createDisplayRequest.districtName = '';
    createDisplayRequest.generalHourPictureName = '';
    createDisplayRequest.id = 0;
    createDisplayRequest.kilometerPictureName = '';
    createDisplayRequest.reportDate = '';
    createDisplayRequest.status = '';
    createDisplayRequest.updatedAt = '';
    createDisplayRequest.display = [];
    const display = new Display();
    display.displayArea = '';
    display.displayPictureName = '';
    display.displayTimingTo = '';
    display.peopleViewed = '';
    createDisplayRequest.display.push(display);
    createDisplayRequest.display[0].displayPictureName = '';
    createDisplayRequest.display[0].displayTimingFrom = '';
    createDisplayRequest.display[0].displayTimingTo = '';

    return createDisplayRequest;
  }

  selectionChanged(event: Event) {
    console.log(event);
  }
  submitReport() {
    this.createDisplayRequest = Object.assign(this.getDefaultValueSet(), this.createDisplayRequest);
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

    }, (err) => {
    });
    console.log('form submition');
  }

  handlekilometerPictureName(files: FileList) {
    this.createDisplayRequest.kilometerPictureName = files.item(0).name.toString();
  }

  handleVideoFileName(files: FileList) {
    this.createDisplayRequest.generalHourPictureName = files.item(0).name.toString();
  }

  getPlaceHolder() {
    return this.createDisplayRequest.kilometerPictureName ? this.createDisplayRequest.kilometerPictureName: 'No file';
  }

  cancel() {
    this.router.navigateByUrl('dashboard/ledVehicle/reviewedDisplay');
  }
}
