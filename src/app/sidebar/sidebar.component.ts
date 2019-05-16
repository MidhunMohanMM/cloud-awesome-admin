import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
declare var require: any
var $ = require("jquery");

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.routeConfig.path);
    if(this.route.routeConfig.path == 'vendors'){
      $( ".custom-vendor-menu" ).attr( 'style', 'display :block' );
      $( ".custom-vendor-color-menu" ).attr( 'style', 'background :#f5f8fa' );
    }
    else if(this.route.routeConfig.path == 'vendortype'){
      $( ".custom-vendor-menu" ).attr( 'style', 'display :block' );
      $( ".custom-vendortype-color-menu" ).attr( 'style', 'background :#f5f8fa' );
    }
    else if(this.route.routeConfig.path == 'partners'){
      $( ".custom-partners-menu" ).attr( 'style', 'display :block' );
      $( ".custom-management-color-menu" ).attr( 'style', 'background :#f5f8fa' );
    }
    else if(this.route.routeConfig.path == 'dashboard'){
      $( ".custom-dashboard-color-menu" ).attr( 'style', 'background :#f5f8fa' );

    }
    else if(this.route.routeConfig.path == 'partnercontact'){
      $( ".custom-partners-menu" ).attr( 'style', 'display :block' );
      $( ".custom-contact-color-menu" ).attr( 'style', 'background :#f5f8fa' );
    }
    else if(this.route.routeConfig.path == 'leads'){
      $( ".custom-leads-color-menu" ).attr( 'style', 'background :#f5f8fa' );
    }
    else if(this.route.routeConfig.path == 'addregion'){
      $( ".custom-settings-menu" ).attr( 'style', 'display :block' );
      $( ".custom-addregion-color-menu" ).attr( 'style', 'background :#f5f8fa' );
    }
    else if(this.route.routeConfig.path == 'alladmin'){
      $( ".custom-settings-menu" ).attr( 'style', 'display :block' );
      $( ".custom-alladmin-color-menu" ).attr( 'style', 'background :#f5f8fa' );
    }
    else if(this.route.routeConfig.path == 'addpermission'){
      $( ".custom-settings-menu" ).attr( 'style', 'display :block' );
      $( ".custom-addpermission-color-menu" ).attr( 'style', 'background :#f5f8fa' );
    }
  }

}
