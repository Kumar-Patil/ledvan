import { Component, OnInit } from '@angular/core';
import { PanelUsersService } from '../panel-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-panel-users',
  templateUrl: './create-panel-users.component.html',
  styleUrls: ['./create-panel-users.component.css']
})
export class CreatePanelUsersComponent implements OnInit {


  user: any = {};

  options = [
          { value:"1", name: "Bokaro"},
          { value:"2", name: "Chaibasa"},
          { value:"3", name: "Chatra"},
          { value:"4", name: "Daltonganj"},
          { value:"5", name: "Deoghar"},
          { value:"6", name: "Dhanbad"},
          { value:"7", name: "Dumka"},
          { value:"8", name: "Garhwa"},
          { value:"9", name: "Giridih"},
          { value:"10", name: "Godda"},
          { value:"11", name: "Gumla"},
          { value:"12", name: "Hazaribagh"},
          { value:"13", name: "Jamshedpur"},
          { value:"14", name: "Jamtara"},
          { value:"15", name: "Khunti"},
          { value:"16", name: "Koderma"},
          { value:"17", name: "Latehar"},
          { value:"18", name: "Lohardaga"},
          { value:"19", name: "Pakur"},
          { value:"20", name: "Ramgarh"},
          { value:"21", name: "Ranchi"},
          { value:"22", name: "Sahebganj"},
          { value:"23", name: "Saraikela"},
          { value:"24", name: "Simdega"},
  ]

  config = {
    displayKey: 'name', // if objects array passed which key to be displayed defaults to name
    search: true, // true/false for the search functionlity defaults to false,
    height: '200px',
    placeholder: 'Select Districts', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => {},
    limitTo: this.options.length, // a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search', // label thats displayed in search input,
    searchOnKey: 'name'
  };
  constructor(private panelUsersService: PanelUsersService, private router: Router) { }


  ngOnInit() {
  }

  createUser(user: any) {
    const userReq: any = {};
    userReq.districtName = user.district.name;
    userReq.districtId = user.district.value;
    userReq.mobileNumber = user.mobile;
    userReq.password = user.password;
    userReq.email = user.email;
    this.panelUsersService.createPanelUser(userReq).subscribe((res) => {
      this.router.navigate(['dashboard/viewPanelUser']);
    });
  }
}
