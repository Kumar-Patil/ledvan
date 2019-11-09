import { Component,OnInit,AfterViewInit,OnDestroy} from
'@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit,OnDestroy {

  loginForm: FormGroup;
  isSubmitted  =  false;
  images=['../../assets/images/login.png','../../assets/images/image1.jpeg','../../assets/images/image2.jpeg'];
  constructor(private authService: AuthService, private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.image = this.images[0]
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/dashboard/myDashboard');
  }

  image:any;
  interval:any;

  ngAfterViewInit() {

    let i=0;
     this.interval = setInterval(() => {
       this.image = this.images[i%this.images.length];
       i++;
  }, 10000);
  }
  ngOnDestroy(){
    clearInterval(this.interval);
  }

}