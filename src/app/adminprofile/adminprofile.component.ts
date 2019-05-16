import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
declare var axios: any;
declare var require: any
var $ = require("jquery");

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  partnerdetails: any = [];
  companyname: any;
  countrylist: any;
  designation: any;
  domainname: any;
  name: any;
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
  productname: any;
  selectedItems:any = {
    item_text : '',
    item_id: ''
  };

  statuses :any =  ['Approved','Not Approved', 'Pending', 'Rejected']
  vendorsproductsid: any;
  vendorpartnerid: any= "";
  vendorlevelid: any = "";
  statusproduct: any = "";
  statuspartnervendor: any = "";
  vendors: any;
  vendorsid: any = "";
  productsid :  any = "";
  vendorproducts: any;
  vendorlevels: any;
  allpartnervendorlevels: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getpartner();
    this.getpartnercontacts();
    this.getvendors();
    this.getpartnervendorlevel();
    // this.getvendorlevel();
    console.log(this.route.snapshot.params.id);
    $("#divid").hide();

    $(".form-control").focus(function(){
      $(this).parent().addClass("focused");
   
     }).blur(function(){
          $(this).parent().removeClass("focused");
     })

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      
      allowSearchFilter: true
    };

    this.dropdownSettingsstatus = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      
      allowSearchFilter: true
    };

    this.dropdownListstatus = [
      { item_id: 1, item_text: 'Approved' },
      { item_id: 2, item_text: 'Not Approved' },
      { item_id: 3, item_text: 'Pending' },
      { item_id: 4, item_text: 'Rejected' },
    ]

    this.dropdownList1 = [
      { item_id: 1, item_text: 'Afghanistan' },
      { item_id: 2, item_text: 'Albania' },
      { item_id: 3, item_text: 'Algeria' },
      { item_id: 4, item_text: 'Andorra' },
      { item_id: 5, item_text: 'Angola' },
      { item_id: 6, item_text: 'Anguilla' },
      { item_id: 7, item_text: 'Antigua &amp; Barbuda' },
      { item_id: 8, item_text: 'Argentina' },
      { item_id: 9, item_text: 'Armenia' },
      { item_id: 10, item_text: 'Australia' },
      { item_id: 11, item_text: 'Austria' },
      { item_id: 12, item_text: 'Azerbaijan' },
      { item_id: 13, item_text: 'Bahamas' },
      { item_id: 14, item_text: 'Bahrain' },
      { item_id: 15, item_text: 'Bangladesh' },
      { item_id: 16, item_text: 'Barbados' },
      { item_id: 17, item_text: 'Belarus' },
      { item_id: 18, item_text: 'Belgium' },
      { item_id: 19, item_text: 'Belize' },
      { item_id: 20, item_text: 'Benin' },
      { item_id: 21, item_text: 'Bermuda' },
      { item_id: 22, item_text: 'Bhutan' },
      { item_id: 23, item_text: 'Bolivia' },
      { item_id: 24, item_text: 'Bosnia &amp; Herzegovina' },
      { item_id: 25, item_text: 'Botswana' },
      { item_id: 26, item_text: 'Brazil' },
      { item_id: 27, item_text: 'Brunei' },
      { item_id: 28, item_text: 'Burundi' },
      { item_id: 29, item_text: 'Bulgaria' },
      { item_id: 30, item_text: 'British Virgin Islands' },
      { item_id: 31, item_text: 'Burkina Faso' },
      { item_id: 32, item_text: 'Cambodia' },
      { item_id: 33, item_text: 'Cameroon' },
      { item_id: 34, item_text: 'Canada' },
      { item_id: 35, item_text: 'Cape Verde' },
      { item_id: 36, item_text: 'Cayman Islands' },
      { item_id: 37, item_text: 'Chad' },
      { item_id: 38, item_text: 'Chile' },
      { item_id: 39, item_text: 'China' },
      { item_id: 40, item_text: 'Congo' },
      { item_id: 41, item_text: 'Colombia' },
      { item_id: 42, item_text: 'Cook Islands' },
      { item_id: 43, item_text: 'Costa Rica' },
      { item_id: 44, item_text: 'Cote D Ivoire' },
      { item_id: 45, item_text: 'Croatia' },
      { item_id: 46, item_text: 'Cruise Ship' },
      { item_id: 47, item_text: 'Cuba' },
      { item_id: 48, item_text: 'Cyprus' },
      { item_id: 49, item_text: 'Czech Republic' },
      { item_id: 50, item_text: 'Denmark' },
      { item_id: 51, item_text: 'Djibouti' },
      { item_id: 52, item_text: 'Dominica' },
      { item_id: 53, item_text: 'Dominican Republic' },
      { item_id: 54, item_text: 'Ecuador' },
      { item_id: 55, item_text: 'Egypt' },
      { item_id: 56, item_text: 'El Salvador' },
      { item_id: 57, item_text: 'Equatorial Guinea' },
      { item_id: 58, item_text: 'Estonia' },
      { item_id: 59, item_text: 'Ethiopia' },
      { item_id: 60, item_text: 'Falkland Islands' },
      { item_id: 61, item_text: 'Faroe Islands' },
      { item_id: 62, item_text: 'Fiji' },
      { item_id: 63, item_text: 'France' },
      { item_id: 64, item_text: 'French Polynesia' },
      { item_id: 65, item_text: 'French West Indies' },
      { item_id: 66, item_text: 'Gabon' },
      { item_id: 67, item_text: 'Gambia' },
      { item_id: 68, item_text: 'Georgia' },
      { item_id: 69, item_text: 'Germany' },
      { item_id: 70, item_text: 'Ghana' },
      { item_id: 71, item_text: 'Gibraltar' },
      { item_id: 72, item_text: 'Greece' },
      { item_id: 73, item_text: 'Greenland' },
      { item_id: 74, item_text: 'Grenada' },
      { item_id: 75, item_text: 'Guam' },
      { item_id: 76, item_text: 'Guatemala' },
      { item_id: 77, item_text: 'Guernsey' },
      { item_id: 78, item_text: 'Guinea' },
      { item_id: 79, item_text: 'Guinea Bissau' },
      { item_id: 80, item_text: 'Guyana' },
      { item_id: 81, item_text: 'Honduras' },
      { item_id: 82, item_text: 'Hong Kong' },
      { item_id: 83, item_text: 'Hungary' },
      { item_id: 84, item_text: 'Iceland' },
      { item_id: 85, item_text: 'India' },
      { item_id: 86, item_text: 'Indonesia' },
      { item_id: 87, item_text: 'Iran' },
      { item_id: 88, item_text: 'Iraq' },
      { item_id: 89, item_text: 'Ireland' },
      { item_id: 90, item_text: 'Isle of Man' },
      { item_id: 91, item_text: 'Israel' },
      { item_id: 92, item_text: 'Italy' },
      { item_id: 93, item_text: 'Jamaica' },
      { item_id: 94, item_text: 'Japan' },
      { item_id: 95, item_text: 'Jersey' },
      { item_id: 96, item_text: 'Jordan' },
      { item_id: 97, item_text: 'Kazakhstan' },
      { item_id: 98, item_text: 'Kenya' },
      { item_id: 99, item_text: 'Kuwait' },
      { item_id: 100, item_text: 'Kyrgyz Republic' },
      { item_id: 101, item_text: 'Laos' },
      { item_id: 102, item_text: 'Latvia' },
      { item_id: 103, item_text: 'Lebanon' },
      { item_id: 104, item_text: 'Lesotho' },
      { item_id: 105, item_text: 'Liberia' },
      { item_id: 106, item_text: 'Libya' },
      { item_id: 107, item_text: 'Liechtenstein' },
      { item_id: 108, item_text: 'Lithuania' },
      { item_id: 109, item_text: 'Luxembourg' },
      { item_id: 110, item_text: 'Macau' },
      { item_id: 111, item_text: 'Macedonia' },
      { item_id: 112, item_text: 'Madagascar' },
      { item_id: 113, item_text: 'Malawi' },
      { item_id: 114, item_text: 'Malaysia' },
      { item_id: 115, item_text: 'Maldives' },
      { item_id: 116, item_text: 'Mali' },
      { item_id: 117, item_text: 'Malta' },
      { item_id: 118, item_text: 'Mauritania' },
      { item_id: 119, item_text: 'Mauritius' },
      { item_id: 120, item_text: 'Mexico' },
      { item_id: 121, item_text: 'Moldova' },
      { item_id: 122, item_text: 'Monaco' },
      { item_id: 123, item_text: 'Mongolia' },
      { item_id: 124, item_text: 'Montenegro' },
      { item_id: 125, item_text: 'Montserrat' },
      { item_id: 126, item_text: 'Morocco' },
      { item_id: 127, item_text: 'Mozambique' },
      { item_id: 128, item_text: 'Namibia' },
      { item_id: 129, item_text: 'Nepal' },
      { item_id: 130, item_text: 'Netherlands' },
      { item_id: 131, item_text: 'Netherlands Antilles' },
      { item_id: 132, item_text: 'New Caledonia' },
      { item_id: 133, item_text: 'New Zealand' },
      { item_id: 134, item_text: 'Nicaragua' },
      { item_id: 135, item_text: 'Niger' },
      { item_id: 136, item_text: 'Nigeria' },
      { item_id: 137, item_text: 'Norway' },
      { item_id: 138, item_text: 'Oman' },
      { item_id: 139, item_text: 'Pakistan' },
      { item_id: 140, item_text: 'Palestine' },
      { item_id: 141, item_text: 'Panama' },
      { item_id: 142, item_text: 'Papua New Guinea' },
      { item_id: 143, item_text: 'Paraguay' },
      { item_id: 144, item_text: 'Peru' },
      { item_id: 145, item_text: 'Philippines' },
      { item_id: 146, item_text: 'Poland' },
      { item_id: 147, item_text: 'Portugal' },
      { item_id: 148, item_text: 'Puerto Rico' },
      { item_id: 149, item_text: 'Qatar' },
      { item_id: 150, item_text: 'Reunion' },
      { item_id: 151, item_text: 'Romania' },
      { item_id: 152, item_text: 'Russia' },
      { item_id: 153, item_text: 'Rwanda' },
      { item_id: 154, item_text: 'Saint Pierre and Miquelon' },
      { item_id: 155, item_text: 'Samoa' },
      { item_id: 156, item_text: 'San Marino' },
      { item_id: 157, item_text: 'Satellite' },
      { item_id: 158, item_text: 'Saudi Arabia' },
      { item_id: 159, item_text: 'Senegal' },
      { item_id: 160, item_text: 'Serbia' },
      { item_id: 161, item_text: 'Seychelles' },
      { item_id: 162, item_text: 'Sierra Leone' },
      { item_id: 163, item_text: 'Singapore' },
      { item_id: 164, item_text: 'Slovakia' },
      { item_id: 165, item_text: 'Slovenia' },
      { item_id: 166, item_text: 'South Africa' },
      { item_id: 167, item_text: 'South Korea' },
      { item_id: 168, item_text: 'Spain' },
      { item_id: 169, item_text: 'Sri Lanka' },
      { item_id: 170, item_text: 'St Kitts and Nevis' },
      { item_id: 171, item_text: 'St Lucia' },
      { item_id: 172, item_text: '"St Vincent' },
      { item_id: 173, item_text: 'St. Lucia' },
      { item_id: 174, item_text: 'Sudan' },
      { item_id: 175, item_text: 'Suriname' },
      { item_id: 176, item_text: 'Swaziland' },
      { item_id: 177, item_text: 'Sweden' },
      { item_id: 178, item_text: 'Switzerland' },
      { item_id: 179, item_text: 'Syria' },
      { item_id: 180, item_text: 'Taiwan' },
      { item_id: 181, item_text: 'Tajikistan' },
      { item_id: 182, item_text: 'Tanzania' },
      { item_id: 183, item_text: 'Thailand' },
      { item_id: 184, item_text: 'Timor L Este' },
      { item_id: 185, item_text: 'Togo' },
      { item_id: 186, item_text: 'Tonga' },
      { item_id: 187, item_text: 'Trinidad and Tobago ' },
      { item_id: 188, item_text: 'Tunisia' },
      { item_id: 189, item_text: 'Turkey' },
      { item_id: 190, item_text: 'Turkmenistan' },
      { item_id: 191, item_text: 'Turks and Caicos' },
      { item_id: 192, item_text: 'Uganda' },
      { item_id: 193, item_text: 'Ukraine' },
      { item_id: 194, item_text: 'United Arab Emirates' },
      { item_id: 195, item_text: 'United Kingdom' },
      { item_id: 196, item_text: 'United States' },
      { item_id: 197, item_text: 'United States Minor Outlying Islands' },
      { item_id: 198, item_text: 'Uruguay' },
      { item_id: 199, item_text: 'Uzbekistan' },
      { item_id: 200, item_text: 'Venezuela' },
      { item_id: 201, item_text: 'Vietnam' },
      { item_id: 202, item_text: 'Virgin Islands (US)' },
      { item_id: 203, item_text: 'Yemen' },
      { item_id: 204, item_text: 'Zambia' },
      { item_id: 204, item_text: 'Zimbabwe' },
      
    ];
    
  }

  onScroll() {
    console.log('scrolled!!');
  }

  getpartner(){
    var self = this;
    axios.get('http://103.214.233.141:3333/v1/secure/partners/profiles/' + self.route.snapshot.params.id)
    .then(function (response) {
      console.log(response.data);
      self.firstletter = response.data.companyname[0];
      self.companyname = response.data.companyname;
      self.countrylist = response.data.countrylist;
      self.designation = response.data.designation;
      self.domainname = response.data.domainname;
      self.name = response.data.name;
      self.phone = response.data.phone;
      self.status = response.data.status;
      self.username = response.data.username;
      self.workemail = response.data.workemail;
      self.countries.push(response.data.countrylist.split(","));
      console.log(self.countries);
      for(var i=0 ; i<self.countries.length; i++ ){
        self.selectedItems.item_text = self.countries[i];
        self.selectedItems.item_id = i;
      }
      console.log(self.selectedItems);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 

  }

  getvendors(){
    var self = this;
    axios.get('http://103.214.233.141:3333/v1/secure/vendors/profiles')
    .then(function (response) {
      console.log(response.data);
      self.vendors = response.data;
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    });
  }

  getvendorlevel(){
    var self = this;
    axios.get('http://103.214.233.141:3333/v1/secure/vendors/levels?vendors[vendorsid]=' + self.vendorpartnerid)
    .then(function (response) {
      console.log(response.data);
      self.vendorlevels = response.data;
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    });
  }

  addpartnervendorlevel(){
    var self = this;
    console.log(self.vendorpartnerid);
    console.log(self.vendorlevelid);
    console.log(self.statuspartnervendor);
    axios.post('http://103.214.233.141:3333/v1/secure/partners/vendors',{
        "partnersid":  self.route.snapshot.params.id,
        "vendorsid" : self.vendorpartnerid,
        "vendorslevelsid": self.vendorlevelid,
        "status": self.statuspartnervendor
    })
    .then(function (response) {
      console.log(response.data);
      alert("Level Added Successfully");
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  addproducts(){
    var self = this;
    console.log(self.productsid);
    console.log(self.productname);
    axios.post('http://103.214.233.141:3333/v1/secure/partners/products',{
        "vendorsproductsid": self.productsid,
        "partnersid":  self.route.snapshot.params.id,
        "name": self.productname,
        "status": self.statusproduct
    })
    .then(function (response) {
      console.log(response.data);
      alert("Product Added Successfully");
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  getproducts(){
    var self = this;
    $("#divid").show();
    axios.get('http://103.214.233.141:3333/v1/secure/vendors/products?vendors[vendorsid]=' + self.vendorsid)
    .then(function (response) {
        console.log(response.data);
        self.vendorproducts = response.data;

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

  getpartnervendorlevel(){
    var self = this;
    axios.get('http://103.214.233.141:3333/v1/secure/partners/vendors?partners[partnersid]=' + self.route.snapshot.params.id)
    .then(function (response) {
      console.log(response.data);
      self.allpartnervendorlevels = response.data;
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
