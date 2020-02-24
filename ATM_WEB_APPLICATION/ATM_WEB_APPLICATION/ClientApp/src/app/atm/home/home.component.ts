import { Component, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  http: HttpClient;
  baseUrl: string;
  public username: string;
  public password: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router, ) {
    //Initialize
    this.http = http;
    this.baseUrl = baseUrl;
    this.username = localStorage.getItem('username');
    this.cancel();

    console.log(localStorage.getItem('username'));
  }

  checkbalance() {
    this.cancel();
    this.router.navigateByUrl('balance');
  }
  summary() {
    this.cancel();
    this.router.navigateByUrl('summary');
  }
  withdraw() {
    this.cancel();
    this.router.navigateByUrl('withdraw');
  }
  deposit() {
    this.cancel();
    this.router.navigateByUrl('deposit');
  }
  updatemobileno() {
    this.cancel();
    this.router.navigateByUrl('details');
  }
  cancel() {
    if (this.username == null) {
      localStorage.clear();
      this.router.navigateByUrl('');
    }
  }
  
  logOut() {
    this.username = null;
    this.cancel();
  }
}


