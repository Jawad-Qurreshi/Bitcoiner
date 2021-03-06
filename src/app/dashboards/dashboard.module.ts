import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';


import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
registerLocaleData(en);

import { DashboardRoutes } from './dashboard.routing';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';

import {
  BuySelltableComponent,
  InfocardComponent,
  SummeryTableComponent,
  ClientWithdrawRequesttableComponent,
  AdminWithdrawRequesttableComponent,
  TopsellComponent,
  ActivityComponent,
  DatatableComponent,
  RequesttableComponent,
  DeviceVisitsComponent,
  EarningsComponent,
  InfoBoxComponent,
  BuyertableComponent,
  SellertableComponent,
  UserProfileComponent,
  UserDetailsComponent,
  VisitorsComponent,
  VisitsBounceComponent,
  WeathercardComponent,
  WelcomeComponent,
  ProfileComponent,
  AddressestableComponent,
  ApprovedRequestComponent,
  ApprovedRequestAdminComponent
} from './dashboard-components';
import { NavigationComponent } from './dashboard-components/header-navigation/navigation.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    ChartsModule,
    ChartistModule,
    ReactiveFormsModule,
    RouterModule.forChild(DashboardRoutes),
    PerfectScrollbarModule,
    CalendarModule.forRoot(),
    NgxChartsModule,
    NgxDatatableModule,
    NgZorroAntdModule,
    Ng2SmartTableModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  declarations: [
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    InfocardComponent,
    AdminWithdrawRequesttableComponent,
    BuyertableComponent,
    BuySelltableComponent,
    ProfileComponent,
    NavigationComponent,
    SummeryTableComponent,
    RequesttableComponent,
    ApprovedRequestComponent,
    ClientWithdrawRequesttableComponent,
    TopsellComponent,
    SellertableComponent,
    AddressestableComponent,
    ActivityComponent,
    DeviceVisitsComponent,
    EarningsComponent,
    InfoBoxComponent,
    DatatableComponent,
    UserProfileComponent,
    UserDetailsComponent,
    VisitorsComponent,
    VisitsBounceComponent,
    WeathercardComponent,
    WelcomeComponent,
    ApprovedRequestAdminComponent
  ]
})
export class DashboardModule { }
