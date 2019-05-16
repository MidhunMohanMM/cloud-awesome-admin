//@Angular Module Imports


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountToModule } from 'angular-count-to';
import { NgxInfiniteScrollerModule } from 'ngx-infinite-scroller';
import { HttpClientModule } from '@angular/common/http';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { InfiniteScrollModule } from '@thisissoon/angular-infinite-scroll';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//Custom npm plugins imports
import { ChartsModule } from 'ng2-charts';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxEasypiechartModule } from 'ngx-easypiechart';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarModule } from "angular-progress-bar";
import {DataTableModule} from "angular-6-datatable";
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts';

//Custom component imports

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { RegionalComponent } from './regional/regional.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AddpermissionComponent } from './addpermission/addpermission.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AlladminComponent } from './alladmin/alladmin.component';
import { PartnersComponent } from './partners/partners.component';
import { LeadsComponent } from './leads/leads.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { PartnersummaryComponent } from './partnersummary/partnersummary.component';
import { PartnerprofileComponent } from './partnerprofile/partnerprofile.component';
import { PartnercontactComponent } from './partnercontact/partnercontact.component';
import { AdmineditprofileComponent } from './admineditprofile/admineditprofile.component';
import { CountryComponent } from './country/country.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AddregionComponent } from './addregion/addregion.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { VendorsComponent } from './vendors/vendors.component';
import { AddvendortypesComponent } from './addvendortypes/addvendortypes.component';
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
 


//@angularcomponent, custom component && plugins 

//import and export 

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    RegionalComponent,
    AddadminComponent,
    AddpermissionComponent,
    SidebarComponent,
    AlladminComponent,
    PartnersComponent,
    LeadsComponent,
    AdminprofileComponent,
    PartnersummaryComponent,
    PartnerprofileComponent,
    PartnercontactComponent,
    AdmineditprofileComponent,
    CountryComponent,
    DoughnutChartComponent, 
    PieChartComponent, 
    BarChartComponent, 
    AddregionComponent, VendorsComponent, AddvendortypesComponent, VendorprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxEasypiechartModule,
    EasyPieChartModule,
    ProgressBarModule,
    NgMultiSelectDropDownModule.forRoot(),
    CountToModule,
    ChartsModule,
    NgxInfiniteScrollerModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgScrollbarModule,
    PerfectScrollbarModule,
    NgxDatatableModule,
    DataTableModule
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);