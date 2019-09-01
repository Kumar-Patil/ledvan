import { Component, OnInit, ViewChild } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { NgForm } from '@angular/forms';
import { LedVehicleService } from '../led-vehicle.service';
@Component({
  selector: 'app-create-display',
  templateUrl: './create-display.component.html',
  styleUrls: ['./create-display.component.css']
})
export class CreateDisplayComponent implements OnInit {

  reportingtime = { hour: 13, minute: 30 };
  closingTime = { hour: 18, minute: 30 };
  meridian = true;
  @ViewChild('report', { static: false }) report: NgForm;
  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd/mm/yyyy'
    // other options are here...
  };

  myDateInit = true;
  model: IMyDateModel = null;
  vehicleNum: any;
  vehicleStayArea: any;
  closingPlace: any;
  distance: any;
  options = [{id: 34, description: 'Ranchi: H2334'}, {id: 35, description: 'Gumla: H4232'}, {id: 37, description: 'Bokaro: F2342'}];
  config = {
    displayKey: 'description', // if objects array passed which key to be displayed defaults to description
    search: true, // true/false for the search functionlity defaults to false,
    height: 'auto',
    placeholder: 'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => {},
    limitTo: this.options.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search', // label thats displayed in search input,
    searchOnKey: 'description'
  };
  constructor(private ledVehicleService: LedVehicleService) { }

  ngOnInit() {
    this.options = [...this.options, {id: 38, description: 'Goddha: H1122'}];
    if (this.myDateInit) {
      // Initialize to specific date (14.05.2019) with IMyDate object
      this.model = {
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
      this.model = { isRange: false, singleDate: { jsDate: new Date() } };
    }
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  submitReport() {
    const requestObj = {
        distance: this.distance,
        closingTime: this.closingTime,
        closingPlace: this.closingPlace,
        reportingtime: this.reportingtime,
        vehicleNum: this.vehicleNum,
        vehicleStayArea: this.vehicleStayArea,
        model: this.model

    };
    this.ledVehicleService.createReport(requestObj).subscribe((res) => {

    });
    console.log('form submition');
  }
}
