import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
declare var axios: any;


@Component({
  selector: 'app-vendorprofile',
  templateUrl: './vendorprofile.component.html',
  styleUrls: ['./vendorprofile.component.css']
})
export class VendorprofileComponent implements OnInit {

  partnerdetails: any = [];
  companyname: any;
  countrylist: any;
  designation: any;
  domainname: any;
  name: any;
  productname: any;
  phone: any;
  status: any = [];
  username: any;
  workemail: any;
  firstletter: any;
  contactlength: any;
  contacts: any;
  countries: any = [];
  dropdownList1 = [];
  dropdownListstatus = [];
  dropdownSettings = {};
  dropdownSettingsstatus = {};
  cntries = [];
  region: any;
  disabled:any;
  config:any;
  selectedItems:any = {
    item_text : '',
    item_id: ''
  };

  statuses :any =  ['Approved','Not Approved', 'Pending', 'Rejected']
  logo: any;
  islarge: any;
  vendorstypename: any;
  vendorstypestatus: any;
  vendortypes: any;
  vendortypeid: any = "";
  allvendortypes: any;
  levelname: any;
  products: any;
  levels: any;
  levellength: any;
  productlength: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getpartner();
    this.getpartnercontacts();
    this.getvendortype();
    this.getproducts();
    this.getlevels();
    console.log(this.route.snapshot.params.id);
    
  }

  onScroll() {
    console.log('scrolled!!');
  }

  getpartner(){
    var self = this;
    axios.get('http://103.214.233.141:3333/v1/secure/vendors/profiles/' + self.route.snapshot.params.id)
    .then(function (response) {
      console.log(response.data);
      self.firstletter = response.data.name[0];
      self.name = response.data.name;
      self.logo = response.data.logo;
      self.designation = response.data.designation;
      self.islarge = response.data.islarge;
      self.status = response.data.status;
      self.vendorstypename = response.data.vendors_type.name;
      self.vendorstypestatus = response.data.vendors_type.status;
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 

  }

  getpartnercontacts(){
    var self = this;
    axios.get('http://103.214.233.141:3333/v1/secure/partners/contacts?partners[partnersid]=' + self.route.snapshot.params.id)
    .then(function (response) {
      console.log(response.data);
      self.contacts = response.data;
      self.contactlength = response.data.length;

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
        self.allvendortypes = response.data;
        console.log(self.allvendortypes);
     })
     .catch(function (error) {
         console.log('An Error occured',  error);  
     }); 
     
    }
     addproduct(){
      var self = this;
      axios.post('http://103.214.233.141:3333/v1/secure/vendors/products',{
        "vendorsid" : self.route.snapshot.params.id,
        "name" : self.productname ,
        "status" : "1"
      })
      .then(function (response) {
          console.log(response.data);
          alert("Product Added Successfully");
       })
       .catch(function (error) {
           console.log('An Error occured',  error);  
       }); 
     }

     addlevels(){
      var self = this;
      axios.post('http://103.214.233.141:3333/v1/secure/vendors/levels',{
        "vendorsid" : self.route.snapshot.params.id,
        "name" : self.levelname ,
      })
      .then(function (response) {
          console.log(response.data);
          alert("Level Added Successfully");
       })
       .catch(function (error) {
           console.log('An Error occured',  error);  
       }); 
     }

     getproducts(){
      var self = this;
      axios.get('http://103.214.233.141:3333/v1/secure/vendors/products?vendors[vendorsid]=' + self.route.snapshot.params.id)
      .then(function (response) {
          console.log(response.data);
          for (let key in response.data){
            response.data[key].firstletter = response.data[key].name[0];
            }
          self.products=response.data;
          self.productlength = response.data.length;
       })
       .catch(function (error) {
           console.log('An Error occured',  error);  
       }); 
     }

     getlevels(){
      var self = this;
      axios.get('http://103.214.233.141:3333/v1/secure/vendors/levels?vendors[vendorsid]=' + self.route.snapshot.params.id)
      .then(function (response) {
          console.log(response.data);
          for (let key in response.data){
            response.data[key].firstletter = response.data[key].name[0];
            }
          self.levels=response.data;
          self.levellength = response.data.length;
       })
       .catch(function (error) {
           console.log('An Error occured',  error);  
       }); 
     }

  
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.region);

  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
