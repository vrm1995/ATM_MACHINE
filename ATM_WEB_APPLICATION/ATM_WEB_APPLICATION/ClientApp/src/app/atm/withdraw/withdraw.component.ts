import { Component, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
})
export class WithdrawComponent {
  http: HttpClient;
  baseUrl: string;
  public username: string;
  public amount: number;
  public balance: number;
  public message: string;
  public hundredNotes: number;
  public twoHundredNotes: number;
  public twoThousandNotes: number;
  public amountWithdrawn: boolean;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router, ) {
    //Initialize
    this.http = http;
    this.baseUrl = baseUrl;
    this.username = localStorage.getItem('username');
    if (this.username == null)
      this.cancel();

    this.amountWithdrawn = false;

  }
  backtohome() {
    this.router.navigateByUrl('home');
  }
  cancel() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  setDenominations(amount) {
    this.twoThousandNotes = 0; this.twoHundredNotes = 0; this.hundredNotes = 0;
    if (amount == 0) return;
    var total = 0;
    while (total != amount) {
      //Some logic to randomly generate number of notes
      if (total + 2000 <= amount) { total += 2000; this.twoThousandNotes++; }
      if (total + 200 <= amount) { total += 200; this.twoHundredNotes++; }
      if (total + 100 <= amount) { total += 100; this.hundredNotes++; }
    }
  }

  validateAndwithdraw() {
    this.amountWithdrawn = false;
    if (this.amount == null || this.amount == undefined) {
      this.message = "Enter the amount";
      document.getElementById("message").innerHTML = "<span style='color: red;'>" + this.message + "</span>";
    }
    else if (this.amount == 0) {
      this.message = "Enter minimum 100 INR to withdraw";
      document.getElementById("message").innerHTML = "<span style='color: red;'>" + this.message + "</span>";
      return;
    }
    else if (this.amount % 100 != 0) {
      this.message = "Enter only multiples of 100";
      document.getElementById("message").innerHTML = "<span style='color: red;'>" + this.message + "</span>";
    }
    else {
      const params = new HttpParams()
        .set('username', this.username)
        .set('amount', this.amount.toString());

      this.http.get<number>(this.baseUrl + 'api/Transaction/GetBalance', { params }).subscribe(
        (success) => {
          console.log((success));
          this.balance = (success);
          if (this.balance < this.amount) {
            this.message = "Your account balance is low.<br \> Balance : " + this.balance + " INR";
            document.getElementById("message").innerHTML = "<span style='color: red;'>" + this.message + "</span>";

          } else {
            this.http.get<number>(this.baseUrl + 'api/Transaction/withdraw', { params }).subscribe(
              (success) => {
                this.message = "Remaining balance : " + (success) + " INR";
                document.getElementById("message").innerHTML = "<span style='color: blue;'>" + this.message + "</span>";

                this.setDenominations(this.amount);
                this.amountWithdrawn = true;
                this.amount = 0; 0
              });
          }
        });






    }
  }

}

