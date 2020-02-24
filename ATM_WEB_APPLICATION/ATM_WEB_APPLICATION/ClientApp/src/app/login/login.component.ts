import { Component, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  http: HttpClient;
  baseUrl: string;
  public username: string;
  public password: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router, ) {
    //Initialize
    this.http = http;
    this.baseUrl = baseUrl;
  }

  doLogin() {
    console.log("this.username " + this.username);
    console.log("this.password " + this.password);
    if (this.username == null || this.username == undefined ||
      this.password == null || this.password == undefined) {
      alert("Enter all fields");
      return;
    }

    const params = new HttpParams()
      .set('username', this.username)
      .set('password', this.password);
    this.http.get<string>(this.baseUrl + 'api/User/Autheticate', { params }).subscribe(
      (success) => {
        if (success) {
          console.log("success:" + success);
          localStorage.clear();
          localStorage.setItem('username', this.username);
          localStorage.setItem('password', this.password);
   
          this.router.navigateByUrl('home');
        }
        else
          alert("Please enter valid credentials");
      });
  }
  
}

