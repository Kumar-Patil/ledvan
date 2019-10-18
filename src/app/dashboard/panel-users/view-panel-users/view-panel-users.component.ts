import { Component, OnInit } from '@angular/core';
import { LedVehicleService } from '../../led-vehicle/led-vehicle.service';
import { PanelUsersService } from '../panel-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-panel-users',
  templateUrl: './view-panel-users.component.html',
  styleUrls: ['./view-panel-users.component.scss']
})
export class ViewPanelUsersComponent implements OnInit {

  cols: any[];
  users: any[];
  constructor(private panelUsersService: PanelUsersService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
    this.cols = [
      { field: 'email', header: 'Email' },
      { field: 'password', header: 'Password' },
      { field: 'district', header: 'District' },
      { field: 'mobile', header: 'Mobile' },
      { field: 'delete', header: '' },
    ];
  }

  createPanelUser() {
    this.router.navigateByUrl('dashboard/createPanelUser');
  }

  getUsers() {
    this.panelUsersService.getPanelUsers().subscribe(res => {
      this.users = res;
    });
  }

  deleteUser(user: any) {
    this.panelUsersService.deletePanelUser(user.id).subscribe((data) => {
      this.getUsers();
    });
  }
}
