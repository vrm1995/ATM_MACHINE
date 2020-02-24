import { Component, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataUtil } from '@syncfusion/ej2-data';
//import { GridOptions } from "@ag-grid-community/all-modules";
//import { AgGridModule } from "@ag-grid-community/angular";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
})
export class SummaryComponent {
  http: HttpClient;
  baseUrl: string;
  formatOptions: object = { type: 'datetime', format: 'dd.MM.yyyy HH:mm' };
  public username: string;
  public password: string;
  public rowData: Transaction[];
  public columnDefs: any[];



  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router, ) {
    //Initialize
    this.http = http;
    this.baseUrl = baseUrl;



    this.username = localStorage.getItem('username');
    if (this.username == null)
      this.cancel();


    const params = new HttpParams()
      .set('username', this.username);

    console.log("Before calling");
    this.http.get<Transaction[]>(this.baseUrl + 'api/transaction/transactions', { params }).subscribe(
      (success) => {
        console.log(success);
        this.rowData = DataUtil.parse.parseJson(success);
      });
    console.log("After calling");

  }

  backtohome() {
    this.router.navigateByUrl('home');
  }
  cancel() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }

}
interface Transaction {
  username: string;
  amount: number;
  time: Date;
  balance: number;
  type: string;
}
