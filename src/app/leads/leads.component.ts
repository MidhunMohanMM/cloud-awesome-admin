import { Component, OnInit } from '@angular/core';
declare var axios: any;
declare var require: any
var $ = require("jquery");

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  leads:any = [];
  id:any;
  singlelead: any = [];
  lastlead: any;
  companies = [];
  technologies = [];
  workloads: any;
  reports = [];
  noResults: any = "";
  srch: any = "";
  disabled:any;
  config:any;
  offset: any = 1;
  limit: any = 10;
  constructor() { }

  ngOnInit() {
  
    this.completeleads();
    // this.getleads();
    
    $("#checkedAll").click(function () {
        $(".checkSingle").prop('checked', $(this).prop('checked'));
    });

    $('.edit').click(function () {
      // var text = $('#phone').text();
       console.log("hi");
      var dad = $(this).parent().parent();
      console.log(dad);
      var text = dad.find('span').text();
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  });

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });

     
  }

  onScroll() {
    console.log('scrolled!!');
    this.getleads();
  }

  editcompany(){
    var dad = $('.editcompany').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editcountry(){
    var dad = $('.editcountry').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editbranches(){
    var dad = $('.editbranches').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editbusinessmodel(){
    var dad = $('.editbusinessmodel').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editcompliance(){
    var dad = $('.editcompliance').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editcustomerportal(){
    var dad = $('.editcustomerportal').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editgdpr(){
    var dad = $('.editgdpr').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editindustry(){
    var dad = $('.editindustry').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editpolicy(){
    var dad = $('.editpolicy').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editpresence(){
    var dad = $('.editpresence').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editsize(){
    var dad = $('.editsize').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editworkforce(){
    var dad = $('.editworkforce').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }


  editavgmailboxsizes(){
    var dad = $('.editavgmailboxsizes').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editcloud(){
    var dad = $('.editcloud').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editbackupstrategy(){
    var dad = $('.editbackupstrategy').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editfirewall(){
    var dad = $('.editfirewall').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  edithighavailability(){
    var dad = $('.edithighavailability').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editdisrecsetup(){
    var dad = $('.editdisrecsetup').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editmailboxes(){
    var dad = $('.editmailboxes').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editoffice365(){
    var dad = $('.editoffice365').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editsharepoint(){
    var dad = $('.editsharepoint').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editdatasize(){
    var dad = $('.editdatasize').parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }
  editapprunning(id){
    var dad = $('#editapprunning' +id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editauth(id){
    var dad = $('#editauth' +id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editbackup(id){
    var dad = $('#editbackup' +id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editbackupfreq(id){
    var dad = $('#editbackupfreq' +id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  edithowbackup(id){
    var dad = $('#edithowbackup' +id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editbackuptype(id){
    var dad = $('#editbackuptype'  +id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editcritical(id){
    var dad = $('#editcritical'  +id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editdatabase(id){
    var dad = $('#editdatabase' +id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editdesc(id){
    var dad = $('#editdesc'+id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editdrsetup(id){
    var dad = $('#editdrsetup'+id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }


  editdrsetupconn(id){
    var dad = $('#editdrsetupconn'+id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editdrsetuploc(id){
    var dad = $('#editdrsetuploc'+id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editdrsetuprepl(id){
    var dad = $('#editdrsetuprepl'+id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  edithasetup(id){
    var dad = $('#edithasetup' +id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  edithasetuprepl(id){
    var dad = $('#edithasetuprepl' +id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editname(id){
    var dad = $('#editname' +id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editos(id){
    var dad = $('#editos'  +id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  edituseraccess(id){
    var dad = $('#edituseraccess'  +id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editwho(id){
    var dad = $('#editwho'  +id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

  editsizerep(id){
    var dad = $('#editsizerep'  +id).parent().parent();
    console.log(dad);
      var text = dad.find('span').text();
      console.log(dad);
      console.log(text);
      dad.find('span').hide();
      dad.find('input[type="text"]').val(text);
      dad.find('input[type="text"]').show().focus();

  $('input[type=text]').focusout(function() {
      var dad = $(this).parent();
      $(this).hide();
      dad.find('span').show();
  });
  }

 

  

  chBackcolor(id) {
        $("#btn"+id).attr("style" , "background-color:#f5f8fa");
        $("#btn"+id).removeClass("btn1");

         $(".btn1").attr("style" , "background-color:#fff");
         $("#btn"+id).addClass("btn1");
 }

 completeleads(){
     var self = this;
    axios.get('http://103.214.233.141:3333/v1/secure/leads/contacts')
    .then(function (response) {
         console.log(response.data);
        self.limit = 10 ;
        self.offset = response.data.length - 10;
        self.getleads();
     })
     .catch(function (error) {
         console.log('An Error occured',  error);
        
     }); 
 }

  getleads(){
    var self = this;
    // self.offset = 1;

    // if(self.limit == 10)

    console.log(self.offset);
    console.log(self.limit)
    axios.get('http://103.214.233.141:3333/v1/secure/leads/contacts?offset='+self.offset+'&limit='+self.limit)
    .then(function (response) {
       console.log(response);
      self.leads = response.data;
        for (let key in response.data){
          var articledate = new Date(response.data[key].createdAt);
          var options = { month: 'short', day: 'numeric' };
          response.data[key].sdate = new Intl.DateTimeFormat('en-US', options).format(articledate);
          self.lastlead = response.data[key].leadsid;
        }
        // if(self.limit == 10)
        self.offset = self.offset - 5;
        self.limit = self.limit + 5;
        self.getsinglelead(self.lastlead);

        

     })
     .catch(function (error) {
         console.log('An Error occured',  error);
        
     }); 
  }


  // search(){
  //   var self = this;
  //   console.log(self.srch);
  //   axios.get('http://103.214.233.141:3333/v1/secure/leads/contacts?leads[name]=' +self.srch)
  //   .then(function (response) {
  //      console.log(response);
  //     self.leads = response.data;
  //       for (let key in response.data){
  //         var articledate = new Date(response.data[key].createdAt);
  //         var options = { month: 'short', day: 'numeric' };
  //         response.data[key].sdate = new Intl.DateTimeFormat('en-US', options).format(articledate);
  //         self.lastlead = response.data[key].leadsid;
  //       }
 
  //       self.getsinglelead(self.lastlead);

  //    })
  //    .catch(function (error) {
  //        console.log('An Error occured',  error);
        
  //    }); 
  // }


  getsinglelead(id){
    var self = this;
    axios.get('http://103.214.233.141:3333/v1/secure/leads/contacts/' +id)
    .then(function (response) {
      // console.log(response);

         var articledate1 = new Date(response.data.createdAt);
     //    console.log(articledate1);
         var options1 = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric' };
         response.data.date = new Intl.DateTimeFormat('en-US', options1).format(articledate1);

        self.singlelead = response.data;
       // console.log(self.singlelead);
        self.getcompany(self.singlelead.leadsid);
        self.gettech(self.singlelead.leadsid);
        self.getreport(self.singlelead.leadsid);
        self.chBackcolor(self.singlelead.leadsid);
     })
     .catch(function (error) {
         console.log('An Error occured',  error);
        
     }); 
  }

  getcompany(id){
    var self = this;
   // console.log(id);
    axios.get('http://103.214.233.141:3333/v1/secure/leads/companies?leads[leadsid]=' +id)
    .then(function (response) {
      self.companies = response.data;   
     })
     .catch(function (error) {
         console.log('An Error occured',  error);
        
     }); 
  }

  gettech(id){
    var self = this;
  //  console.log(id);
    axios.get('http://103.214.233.141:3333/v1/secure/leads/technologies?leads[leadsid]=' +id)
    .then(function (response) {
    //   console.log(response);
      self.technologies = response.data;
    //   console.log(self.technologies);
      // self.noResults = self.companies.length === 0; 
      // console.log(self.noResults);      
     })
     .catch(function (error) {
         console.log('An Error occured',  error);
        
     }); 
  }

  getreport(id){
    var self = this;
    // console.log(id);
    axios.get('http://103.214.233.141:3333/v1/secure/leads/reports?leads[leadsid]=' +id)
    .then(function (response) {
    //   console.log(response);
      self.reports = response.data;
      
      if(self.companies.length != 0){
        self.workloads = response.data[0].leads_workload
        
      }
    //  self.noResults = self.workloads.length === 0;
    //   console.log(self.reports);
    //   console.log(self.workloads);  
     })
     .catch(function (error) {
         console.log('An Error occured',  error);
        
     }); 
  }

}
