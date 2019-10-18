import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'myDashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: 'district/viewDistrict', title: 'District',  icon: 'person', class: '' },
  { path: 'area/viewarea', title: 'Area',  icon: 'content_paste', class: '' },
  { path: 'viewVehicle', title: 'Stage Vehicle',  icon: 'library_books', class: '' },
  { path: 'viewRoutes', title: 'Route Map',  icon: 'bubble_chart', class: '' },
  { path: 'viewPanelUser', title: 'Panel Users',  icon: 'location_on', class: '' },
  { path: 'ledVehicle/reviewedDisplay', title: 'Stage Display',  icon: 'notifications', class: '' },

  { path: 'dailyReport', title: 'PDF Reports',  icon: 'location_on', class: '' },
  { path: 'updateSMTP', title: 'Email Settings',  icon: 'notifications', class: '' }
  // { path: 'district/createDistrict', title: 'Create District',  icon: 'notifications', class: '' },
  // { path: 'area/viewarea', title: 'Create Area',  icon: 'notifications', class: '' },
  // { path: 'createVehicle', title: 'Create Vehicle',  icon: 'notifications', class: '' }


];
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  }

}
