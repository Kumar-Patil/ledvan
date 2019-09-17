import { Component, OnInit } from '@angular/core';
import { LedVehicleService } from '../../led-vehicle/led-vehicle.service';
import { PanelUsersService } from '../panel-users.service';

@Component({
  selector: 'app-view-panel-users',
  templateUrl: './view-panel-users.component.html',
  styleUrls: ['./view-panel-users.component.css']
})
export class ViewPanelUsersComponent implements OnInit {

  cols: any[];
  users: any[];
  constructor(private panelUsersService: PanelUsersService) { }

  ngOnInit() {
    this.panelUsersService.getPanelUsers().subscribe(res => {
      this.users = res;
    });
    this.cols = [
      { field: 'email', header: 'Email' },
      { field: 'password', header: 'Password' },
      { field: 'district', header: 'District' },
      { field: 'mobile', header: 'Mobile' },
      { field: 'delete', header: '' },
    ];
  }

  deleteUser(user: any) {
    this.panelUsersService.deletePanelUser(user.id);
  }
}
