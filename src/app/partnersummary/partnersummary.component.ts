import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partnersummary',
  templateUrl: './partnersummary.component.html',
  styleUrls: ['./partnersummary.component.css']
})
export class PartnersummaryComponent implements OnInit {

  percent: any;
  options:any;

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
  }

}
