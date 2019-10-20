import { Component, OnInit } from '@angular/core';
import { LedVehicleService } from '../../led-vehicle/led-vehicle.service';
import { PanelUsersService } from '../panel-users.service';
import { ConfirmationDialogService } from '../../../confirmation-dialog/confirmation-dialog.service';
import { AlertService } from '../../../_alert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-panel-users',
  templateUrl: './view-panel-users.component.html',
  styleUrls: ['./view-panel-users.component.scss']
})
export class ViewPanelUsersComponent implements OnInit {

  cols: any[];
  users: any[];
  constructor(private panelUsersService: PanelUsersService,
              private alertService: AlertService,
              private confirmationDialogService: ConfirmationDialogService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
    this.cols = [
      { field: 'email', header: 'Email' },
      { field: 'password', header: 'Password' },
      { field: 'districtName', header: 'District' },
      { field: 'mobileNo', header: 'Mobile' },
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
  delete(user: any) {

    this.deleteUser(user);
    // this.openConfirmationDialog(user);
  }
  deleteUser(user: any) {
    this.panelUsersService.deletePanelUser(user.id).subscribe((data) => {
      this.alertService.success('sucessfully deleted panel user');
      this.autoHideMessage();
    });
  }
  public openConfirmationDialog(district: any) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete?')
      .then((confirmed) => this.deleteById(confirmed, district))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  deleteById(confirmed, user: any) {
    if (confirmed) {
     this.deleteUser(user) ;
    }
  }

  autoHideMessage() {
    setTimeout(() => {
      this.alertService.clear();
      this.getUsers();
    }, 1000);
  }
}
