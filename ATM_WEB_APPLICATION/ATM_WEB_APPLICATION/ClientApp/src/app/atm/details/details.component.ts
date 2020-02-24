import { Component, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  http: HttpClient;
  baseUrl: string;
  public username: string;
  public mobile: string;
  public message: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router, ) {
    //Initialize
    this.http = http;
    this.baseUrl = baseUrl;
    this.username = localStorage.getItem('username');
    if (this.username == null)
      this.cancel();

    const params = new HttpParams()
      .set('username', this.username);
    this.http.get<User>(this.baseUrl + 'api/User/GetDetails', { params }).subscribe(
      (success) => {
        this.mobile = success.mobile;
      });

  }

  backtohome() {
    this.router.navigateByUrl('home');
  }
  cancel() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  validateAndsave() {
    if (this.mobile == null || this.mobile == undefined) {
      this.message = "Enter the digits!";
      document.getElementById("message").innerHTML = "<span style='color: red;'>" + this.message + "</span>";
    }
    else if (this.mobile.length != 10) {
      this.message = "Enter 10 digits";
      document.getElementById("message").innerHTML = "<span style='color: red;'>" + this.message + "</span>";
    }
    else {
      const params = new HttpParams()
        .set('username', this.username)
        .set('mobile', this.mobile.toString());

      this.http.get<User>(this.baseUrl + 'api/User/UpdateDetails', { params }).subscribe(
        (success) => {
          this.message = "Updated successfully.<br \>";
          this.mobile = success.mobile;
          document.getElementById("message").innerHTML = "<span style='color: blue;'>" + this.message + "</span>";

        });
    }
  }
}
interface User {
  username: string;
  password: string;
  mobile: string;
  balance: number;
}
