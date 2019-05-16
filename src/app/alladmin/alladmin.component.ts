import { Component, OnInit } from '@angular/core';
declare var require: any
var $ = require("jquery");

@Component({
  selector: 'app-alladmin',
  templateUrl: './alladmin.component.html',
  styleUrls: ['./alladmin.component.css']
})
export class AlladminComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
    $("#checkedAll").click(function () {
      $(".checkSingle").prop('checked', $(this).prop('checked'));
  });
  }

}
