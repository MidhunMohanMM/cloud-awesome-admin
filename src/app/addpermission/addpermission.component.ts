import { Component, OnInit } from '@angular/core';
declare var axios: any;
declare var require: any
var $ = require("jquery");

@Component({
  selector: 'app-addpermission',
  templateUrl: './addpermission.component.html',
  styleUrls: ['./addpermission.component.css']
})
export class AddpermissionComponent implements OnInit {

  //multiselect array declaration

  dropdownList = [];
  regions = [];
  region = [];

  asia = [];
  africa = [];
  europe = [];
  americas = [];
  oceania = [];

  coregionAsia = [];
  coregionAfrica = [];
  coregionEurope = [];
  coregionAmericas = [];
  coregionOceania = [];

/* countries inside seperate array */

  southasiacountry = [];
  centralasiacountry = [];
  westasiacountry = [];
  eastasiacountry = [];

  southafricacountry = [];
  westafricacountry = [];
  eastafricacountry = [];
  middleafricacountry = [];
  northafricacountry = [];

  southeuropecountry = [];
  westeuropecountry = [];
  easteuropecountry = [];
  northeuropecountry = [];

  caribbeancountry = [];
  centralamericacountry = [];
  southamericacountry = [];
  northamericacountry = [];

  osandnzcountry = [];
  micronesiacountry = [];
  polynesiacountry = [];
  melanesiacountry = [];

  /* selected countries */

  SouthAsiaSelect = [];
  CentralAsiaSelect = [];
  EastAsiaSelect = [];
  WestAsiaSelect = [];

  SouthAfricaSelect = [];
  NorthernAfricaSelect = [];
  EastAfricaSelect = [];
  WestAfricaSelect = [];
  MiddleAfricaSelect = [];

  NorthEuropeSelect = [];
  SouthEuropeSelect = [];
  CentralEuropeSelect = [];
  EastEuropeSelect = [];
  WestEuropeSelect = [];

  SouthAmericaSelect = [];
  CentralAmericaSelect = [];
  NorthAmericaSelect = [];
  CaribbeanSelect = [];

  OsandNZSelect = [];
  MicronesiaSelect = [];
  PolynesiaSelect = [];
  MelanesiaSelect = [];


  selectedItems = [];
  dropdownSettings = {};
  permission = [];
 
  constructor() { }

  ngOnInit() {
    $(".form-control").focus(function(){
      $(this).parent().addClass("focused");
   
     }).blur(function(){
          $(this).parent().removeClass("focused");
     })

     this.permission = [
      { item_id: 1, item_text: 'Permission 1' },
      { item_id: 2, item_text: 'Permission 2' },
      { item_id: 3, item_text: 'Permission 3' },
      { item_id: 4, item_text: 'Permission 4' },
      { item_id: 5, item_text: 'Permission 5' },

   ]


     this.regions = [
      { item_id: 1, item_text: 'Asia' },
      { item_id: 2, item_text: 'Africa' },
      { item_id: 3, item_text: 'Europe' },
      { item_id: 4, item_text: 'Americas' },
      { item_id: 5, item_text: 'Oceania' },
     ];

     this.asia = [
      { item_id: 1, item_text: 'Southern Asia' },
      { item_id: 2, item_text: 'Western Asia' },
      { item_id: 3, item_text: 'Eastern Asia' },
      { item_id: 4, item_text: 'Central Asia' },
     ];


     this.africa = [
      { item_id: 1, item_text: 'Southern Africa' },
      { item_id: 2, item_text: 'Western Africa' },
      { item_id: 3, item_text: 'Eastern Africa' },
      { item_id: 4, item_text: 'Middle Africa' },
      { item_id: 5, item_text: 'Northern Africa' },
     ];

     this.europe = [
      { item_id: 1, item_text: 'Southern Europe' },
      { item_id: 2, item_text: 'Western Europe' },
      { item_id: 3, item_text: 'Eastern Europe' },
      { item_id: 4, item_text: 'Northern Europe' },
     ];

     this.americas = [
      { item_id: 1, item_text: 'Caribbean' },
      { item_id: 2, item_text: 'Central America' },
      { item_id: 3, item_text: 'South America' },
      { item_id: 4, item_text: 'Northern America' },
     ];

     this.oceania = [
      { item_id: 1, item_text: 'Australia and New Zealand' },
      { item_id: 2, item_text: 'Micronesia' },
      { item_id: 3, item_text: 'Polynesia' },
      { item_id: 4, item_text: 'Melanesia' },
     ];
    
    
   
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      
      allowSearchFilter: true
    };
     this.southasiancountries();
     this.centralasiancountries();
     this.eastasiancountries();
     this.westasiancountries();

     this.southafricancountries();
     this.middleafricancountries();
     this.eastafricancountries();
     this.westafricancountries();
     this.northafricancountries();

     this.southeuropeancountries();
     this.westeuropeancountries();
     this.easteuropeancountries();
     this.northeuropeancountries();

     this.caribbean();
     this.centralamericacountries();
     this.southamericacountries();
     this.northamericacountries();

     this.osandnzcountries();
     this.micronesiacountries();
     this.polynesiacountries();
     this.melanesiacountries();
  }

  southasiancountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Asia&&subregion=Southern%20Asia')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.southasiacountry.push(obj);
    } 
      console.log(self.southasiacountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  
  westasiancountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Asia&&subregion=Western%20Asia')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.westasiacountry.push(obj);
    } 
      console.log(self.westasiacountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }
  eastasiancountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Asia&&subregion=Eastern%20Asia')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.eastasiacountry.push(obj);
    } 
      console.log(self.eastasiacountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }
  centralasiancountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Asia&&subregion=Central%20Asia')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.centralasiacountry.push(obj);
    } 
      console.log(self.centralasiacountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  
  southafricancountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Africa&&subregion=Southern%20Africa')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.southafricacountry.push(obj);
    } 
      console.log(self.southafricacountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  westafricancountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Africa&&subregion=Western%20Africa')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.westafricacountry.push(obj);
    } 
      console.log(self.westafricacountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  eastafricancountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Africa&&subregion=Eastern%20Africa')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.eastafricacountry.push(obj);
    } 
      console.log(self.eastafricacountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  middleafricancountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Africa&&subregion=Middle%20Africa')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.middleafricacountry.push(obj);
    } 
      console.log(self.middleafricacountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  northafricancountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Africa&&subregion=Northern%20Africa')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.northafricacountry.push(obj);
    } 
      console.log(self.northafricacountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  southeuropeancountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Europe&&subregion=Southern%20Europe')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.southeuropecountry.push(obj);
    } 
      console.log(self.southeuropecountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  westeuropeancountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Europe&&subregion=Western%20Europe')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.westeuropecountry.push(obj);
    } 
      console.log(self.westeuropecountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  easteuropeancountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Europe&&subregion=Eastern%20Europe')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.easteuropecountry.push(obj);
    } 
      console.log(self.easteuropecountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  northeuropeancountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Europe&&subregion=Northern%20Europe')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.northeuropecountry.push(obj);
    } 
      console.log(self.northeuropecountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  caribbean(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Americas&&subregion=Caribbean')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.caribbeancountry.push(obj);
    } 
      console.log(self.caribbeancountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  centralamericacountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Americas&&subregion=Central%20America')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.centralamericacountry.push(obj);
    } 
      console.log(self.centralamericacountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  southamericacountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Americas&&subregion=South%20America')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.southamericacountry.push(obj);
    } 
      console.log(self.southamericacountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  northamericacountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Americas&&subregion=North%20America')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.northamericacountry.push(obj);
    } 
      console.log(self.northamericacountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  osandnzcountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Oceania&&subregion=Australia%20and%20New%20Zealand')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.osandnzcountry.push(obj);
    } 
      console.log(self.osandnzcountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  micronesiacountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Oceania&&subregion=Micronesia')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.micronesiacountry.push(obj);
    } 
      console.log(self.micronesiacountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  polynesiacountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Oceania&&subregion=Polynesia')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.polynesiacountry.push(obj);
    } 
      console.log(self.polynesiacountry);
    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  
  melanesiacountries(){
    var self = this;
    axios.get('https://coregion.herokuapp.com/v1?region=Oceania&&subregion=Melanesia')
    .then(function (response) {
      console.log(response.data);

      for(var i = 0; i < response.data.length; i++) {
          var obj = {};
          obj['item_id'] = i+1;
          obj['item_text'] = response.data[i].common;
          self.melanesiacountry.push(obj);
    } 
      console.log(self.melanesiacountry);
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
