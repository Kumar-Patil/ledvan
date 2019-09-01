import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

export interface Account {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'AngularMaterialGettingStarted';

  isMenuOpen = true;
  contentMargin = 240;
  isExpanded = true;
  showSubmenu = false;
  isShowing = false;
  showSubSubMenu = false;
  task: string[] = [
    'Clearning out my closet', 'Take out trash bins', 'Wash car', 'Tank up the motorcycles', 'Go for flight training'
  ];

  accounts: Account[] = [
    {value: 'change', viewValue: 'Change password'},
    {value: 'logout', viewValue: 'Logout'}
  ];
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  onToolbarMenuToggle() {
    console.log('On toolbar toggled', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 70;
    } else {
      this.contentMargin = 240;
    }
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
