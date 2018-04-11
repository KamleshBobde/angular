import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginServiceService) { }
  @ViewChild('loginForm') form;

  userName: string = '';
  password: string = '';
  ngOnInit() {
  }

  loginRequest(loginForm) {
    if(loginForm.valid) {
      let request = new Login();
      request.uName = loginForm.value.uName;
      request.password = loginForm.value.pwd;
      this.callLoginApi(request);
    } else {
      alert('Please provide user name and password.');
    }
  }

  callLoginApi(request: Login) {
      let val = this.loginService.login(request);
      if(val) {
        this.router.navigate(['/home']);
      } else {
        alert('Login failed, Username orr passoword is incorrect.');
      }
  }
}
