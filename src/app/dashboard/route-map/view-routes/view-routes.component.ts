import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { HttpService } from 'src/app/common/http.service';
import { ApiService } from 'src/app/common/api.service';

@Component({
  selector: 'app-view-routes',
  templateUrl: './view-routes.component.html',
  styleUrls: ['./view-routes.component.css']
})
export class ViewRoutesComponent implements OnInit {
  cols: any[];
  routes: any;
  constructor(private confirmationDialogService: ConfirmationDialogService, private httpService: HttpService,
              private apiService: ApiService) { }

  ngOnInit() {
    this.cols = [
      { field: 'routeName', header: 'Route Maps' },
      { field: 'delete', header: '' },
    ];
    // change to route
    this.getAllDistricts();
  }

  getAllDistricts() {
    this.httpService.getAll(this.apiService.API_DISTRICT_API).subscribe((data) => {
      if (data) {
        this.routes = data;
      }
    }, error => {
      console.log(error);
    });
  }
  delete(routes) {

  }

  edit() {
    alert('edit');
  }
}
