import { Component, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
})
export class BalanceComponent {
  http: HttpClient;
  baseUrl: string;
  public username: string;
  public balance: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router, ) {
    //Initialize
    this.http = http;
    this.baseUrl = baseUrl;
    this.username = localStorage.getItem('username');
    if (this.username == null)
      this.cancel();

    const params = new HttpParams()
      .set('username', this.username);

    this.http.get<string>(this.baseUrl + 'api/Transaction/GetBalance', { params }).subscribe(
      (success) => {
        this.balance = success;
      });


  }
  cancel() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }
  backtohome() {
    this.router.navigateByUrl('home');
  }
}
