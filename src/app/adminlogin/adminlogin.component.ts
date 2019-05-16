import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor( private route : ActivatedRoute ,  private router: Router) { }

  ngOnInit() {
    // (function()
    // {
    //   if( window.localStorage )
    //   {
    //     if( !localStorage.getItem('firstLoad') )
    //     {
    //       localStorage['firstLoad'] = true;
    //       window.location.reload();
    //     }  
    //     else
    //       localStorage.removeItem('firstLoad');
    //   }
    // })();
  }


  Dashboard(){
    var self = this;
    self.router.navigate(['/dashboard'] ); 
  }
}
