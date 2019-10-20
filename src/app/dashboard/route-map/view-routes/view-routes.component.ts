import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/confirmation-dialog/confirmation-dialog.service';
import { HttpService } from 'src/app/common/http.service';
import { ApiService } from 'src/app/common/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-routes',
  templateUrl: './view-routes.component.html',
  styleUrls: ['./view-routes.component.scss']
})
export class ViewRoutesComponent implements OnInit {
  cols: any[];
  routes: any[];
  constructor(private confirmationDialogService: ConfirmationDialogService, private httpService: HttpService,
              private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.cols = [
      { field: 'routeName', header: 'Route Maps' },
      { field: 'delete', header: '' },
    ];
    // change to route
    // this.getAllRoutes();
    this.routes = [
      {
        routeName: 'Bokaro RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Chaibasa RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Chatra RouteMap',
        id: 'Bokaro'
    },{
        routeName: 'Daltonganj RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Deoghar RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Dhanbad RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Dumka RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Garhwa RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Giridih RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Godda RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Gumla RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Hazaribagh RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Jamshedpur RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Jamtara RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Khunti RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Koderma RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Latehar RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Lohardaga RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Pakur RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Ramgarh RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Ranchi RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Sahebganj RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Saraikela RouteMap',
        id: 'Bokaro'
    },
    {
        routeName: 'Simdega RouteMap',
        id: 'Bokaro'
    }
];
  }

  getAllRoutes() {
    this.httpService.getAll(this.apiService.API_DISTRICT_API).subscribe((data) => {
      if (data) {
        // this.routes = data;
      }
    }, error => {
      console.log(error);
    });
  }
  delete(routes) {

  }

  uploadRouteMap() {
    this.router.navigateByUrl('dashboard/uploadRouteMap');
  }

  edit() {
    alert('edit');
  }
}
