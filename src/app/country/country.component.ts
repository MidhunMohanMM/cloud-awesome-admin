import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public donutChartData = [{
    id: 0,
    label: 'water',
    value: 20,
    color: 'red',
  }, {
    id: 1,
    label: 'land',
    value: 20,
    color: 'blue',
  }, {
    id: 2,
    label: 'sand',
    value: 30,
    color: 'green',
  }, {
    id: 3,
    label: 'grass',
    value: 20,
    color: 'yellow',
  }, {
    id: 4,
    label: 'earth',
    value: 10,
    color: 'pink',
  }];

  public pieChartData = [{
    id: 0,
    label: 'Resellers',
    value: 30,
    color: '#4D4D4D ',
  }, {
    id: 1,
    label: 'VARs',
    value: 25,
    color: '#5DA5DA',
  }, {
    id: 2,
    label: 'SI',
    value: 35,
    color: '#FAA43A',
  },{
    id: 3,
    label: 'ISV',
    value: 10,
    color: '#60BD68',
  }]

  public colors = ['red', 'green', '#faa43a']
  public  dataColumns = [1]; // Single Bar Chart
  // public  dataColumns = [3]; // Stacked Bar Chart
   //public  dataColumns = [2, 1]; // Multi Stacked Bar Chart
  public  barChartData = [{
      id: 0,
      label: 'Vendor 1',
      value1: 10,
      value2: 10,
      value3: 10,
   },{
      id: 1,
      label: 'Vendor 2',
      value1: 20,
      value2: 10,
      value3: 10,
   },{
    id: 2,
    label: 'Vendor 3',
    value1: 18,
    value2: 10,
    value3: 10,
 },{
  id: 3,
  label: 'Vendor 4',
  value1: 8,
  value2: 10,
  value3: 10,
},{
  id: 4,
  label: 'Vendor 5',
  value1: 15,
  value2: 10,
  value3: 10,
}]

  constructor() { 
    
  }

  ngOnInit() {
  }

}
