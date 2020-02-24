import { Component, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
})
export class DepositComponent {
  http: HttpClient;
  baseUrl: string;
  public username: string;
  public amount: number;
  public twothousands: number;
  public twohundreds: number;
  public hundreds: number;
  public balance: number;
  public message: string;
  public total: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router, ) {
    //Initialize
    this.http = http;
    this.baseUrl = baseUrl;
    this.username = localStorage.getItem('username');
    if (this.username == null)
      this.cancel();
  }

  backtohome() {
    this.router.navigateByUrl('home');
  }
  cancel() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }
  getTotal() {
    this.amount = (this.twothousands * 2000) + (this.twohundreds * 200) + (this.hundreds * 100);

    if (!isNaN(this.amount))
      this.total = "Total amount to be deposited is: " + this.amount;

    return this.total;
  }
  validateAnddeposit() {
    if (this.twothousands == null || this.twothousands == undefined ||
      this.twohundreds == null || this.twohundreds == undefined ||
      this.hundreds == null || this.hundreds == undefined) {
      this.message = "Enter the denominations!";
      document.getElementById("message").innerHTML = "<span style='color: red;'>" + this.message + "</span>";
    }
    else {

      this.amount = (this.twothousands * 2000) + (this.twohundreds * 200) + (this.hundreds * 100);
      if (this.amount == 0) {
        this.message = "Enter minimum 100 INR to deposit!";
        document.getElementById("message").innerHTML = "<span style='color: red;'>" + this.message + "</span>";
        return;
      }

      const params = new HttpParams()
        .set('username', this.username)
        .set('amount', this.amount.toString());

      this.http.get<number>(this.baseUrl + 'api/Transaction/deposit', { params }).subscribe(
        (success) => {
          this.message = "Money deposited successfully.<br \>Total balance :" + (success) + " INR";
          document.getElementById("message").innerHTML = "<span style='color: blue;'>" + this.message + "</span>";
          this.twothousands = 0; this.twohundreds = 0; this.hundreds = 0;
        });
    }
  }
}
