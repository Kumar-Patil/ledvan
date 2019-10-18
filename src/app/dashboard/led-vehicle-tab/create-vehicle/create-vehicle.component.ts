import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent implements OnInit {

  options = [
    {id: 34, description: 'Ranchi: H2334'},
    {id: 35, description: 'Gumla: H4232'},
    {id: 37, description: 'Bokaro: F2342'}];
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

  vehicle: any = {};
  constructor(private router: Router) { }

  ngOnInit() {
  }

  createVehicle() {
    console.log('About to create vehicle' + JSON.stringify(this.vehicle));
  }

  cancel() {
    this.router.navigateByUrl('dashboard/viewVehicle');
  }
}
