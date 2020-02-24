import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GridModule, PageService, SortService, ResizeService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './atm/home/home.component';
import { BalanceComponent } from './atm/balance/balance.component';
import { DepositComponent } from './atm/deposit/deposit.component';
import { SummaryComponent } from './atm/summary/summary.component';
import { WithdrawComponent } from './atm/withdraw/withdraw.component';
import { DetailsComponent } from './atm/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BalanceComponent,
    DepositComponent,
    SummaryComponent,
    WithdrawComponent,
    DetailsComponent
  ],
  imports: [

    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    GridModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'balance', component: BalanceComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'withdraw', component: WithdrawComponent },
      { path: 'deposit', component: DepositComponent },
      { path: 'details', component: DetailsComponent },

    ])
  ],
  providers: [
    PageService,
    SortService,
    ResizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
