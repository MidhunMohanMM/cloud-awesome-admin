//@Angular Imports


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { VendorprofileComponent } from './vendorprofile/vendorprofile.component';
import { PartnersummaryComponent } from './partnersummary/partnersummary.component';
import { PartnerprofileComponent } from './partnerprofile/partnerprofile.component';
import { PartnercontactComponent } from './partnercontact/partnercontact.component';
import { AdmineditprofileComponent } from './admineditprofile/admineditprofile.component';
import { CountryComponent } from './country/country.component';
import { AddregionComponent } from './addregion/addregion.component';
import { VendorsComponent } from './vendors/vendors.component';
import { AddvendortypesComponent } from './addvendortypes/addvendortypes.component';

// Route Declaration

const routes: Routes = [
  { path: '', component: AdminloginComponent },
  { path: 'dashboard', component: AdmindashboardComponent },
  { path: 'dashboardregional', component: RegionalComponent },
  { path: 'dashboardcountry', component: CountryComponent },
  { path: 'leads', component: LeadsComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'addadmin', component: AddadminComponent },
  { path: 'addpermission', component: AddpermissionComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'alladmin' , component: AlladminComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'editprofile', component: AdmineditprofileComponent },
  { path: 'profile/:id', component: AdminprofileComponent },
  { path: 'vendorprofile/:id', component: VendorprofileComponent },
  { path: 'partnersummary', component: PartnersummaryComponent },
  { path: 'partnerprofile', component: PartnerprofileComponent },
  { path: 'partnercontact', component: PartnercontactComponent },
  { path: 'addregion', component: AddregionComponent },
  { path: 'vendors', component: VendorsComponent },
  { path: 'vendortype', component: AddvendortypesComponent }
];


//Route import and export

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
