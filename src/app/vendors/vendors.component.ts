import { Component, OnInit } from '@angular/core';
declare var require: any;
declare var axios: any;
var $ = require("jquery");


@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  vendorname:  any;
  vendortypeid: any = "";
  vendortypes : [];
  allvendors: [];
  islarge: any = "";

  constructor() { }

  ngOnInit() {
    
    $("#checkedAll").click(function () {
      $(".checkSingle").prop('checked', $(this).prop('checked'));
  });

  $(".form-control").focus(function(){
    $(this).parent().addClass("focused");
 
   }).blur(function(){
        $(this).parent().removeClass("focused");
   })

   this.getvendortype();
   this.getvendor();

  }

  
  addvendor(){
    var self = this;
    axios.post('http://103.214.233.141:3333/v1/secure/vendors/profiles',{
      "vendorstypesid" : self.vendortypeid,
      "name" : self.vendorname,
      "islarge": self.islarge,
      "status" : "0"
    })
    .then(function (response) {
        console.log(response.data);
        alert("Vendor Added Sucessfully");
     })
     .catch(function (error) {
         console.log('An Error occured',  error);  
     }); 
  }

  getvendortype(){
    var self = this;
    axios.get('http://103.214.233.141:3333/v1/secure/vendors/types')
    .then(function (response) {
        console.log(response.data);
        self.vendortypes = response.data;
     })
     .catch(function (error) {
         console.log('An Error occured',  error);  
     }); 
  }

  getvendor(){
    var self = this;
    axios.get('http://103.214.233.141:3333/v1/secure/vendors/profiles')
    .then(function (response) {
        console.log(response.data);

        for (let key in response.data){
          response.data[key].firstletter = response.data[key].name[0];
          }
          self.allvendors = response.data;
          console.log(self.allvendors);
     })

     .catch(function (error) {
         console.log('An Error occured',  error);  
     }); 
  }

}
