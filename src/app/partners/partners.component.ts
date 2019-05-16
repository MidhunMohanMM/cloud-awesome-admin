import { Component, OnInit } from '@angular/core';
declare var require: any
var $ = require("jquery");
declare var axios: any;

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
  percent: any;
  options:any;
  allpartners: any = [];

  constructor() { 
    this.percent = 80;
    this.options = {
      barColor: '#03a9f4',
      trackColor: '#f9f9f9',
      scaleColor: '#dfe0e0',
      scaleLength: 5,
      lineCap: 'round',
      lineWidth: 3,
      size: 110,
      rotate: 0,
      animate: {
          duration: 1000,
          enabled: true
      }
    };
  }

  ngOnInit() {

    this.getallpartners();

    $("#checkedAll").click(function () {
      $(".checkSingle").prop('checked', $(this).prop('checked'));
  });


  }

  getallpartners(){
    var self = this;
    axios.get('http://103.214.233.141:3333/v1/secure/partners/profiles')
    .then(function (response) {
      console.log(response.data);
      for (let key in response.data){
        response.data[key].firstletter = response.data[key].companyname[0];
        // response.data[key].coarray =  JSON.parse(response.data[key].countrylist);
        }
      self.allpartners = response.data;
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

}
