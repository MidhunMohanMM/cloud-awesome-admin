import { Component, OnInit } from '@angular/core';
declare var axios: any;

@Component({
  selector: 'app-partnercontact',
  templateUrl: './partnercontact.component.html',
  styleUrls: ['./partnercontact.component.css']
})
export class PartnercontactComponent implements OnInit {

  config: any;
  contacts: any = [];
  arrayfirstletter: any;
  aflag:any = false;
  acount:any = 0;
  bflag: boolean = false;
  bcount: any  = 0;
  cflag: boolean = false;
  ccount: any = 0;
  dflag: boolean = false;
  dcount: any = 0;
  eflag: boolean = false;
  ecount: any = 0;
  fflag: boolean = false;
  fcount: any = 0;
  gflag: boolean = false;
  gcount: any = 0;
  hflag: boolean = false;
  hcount: any = 0;
  iflag: boolean = false;
  icount: any = 0;
  jflag: boolean = false;
  jcount: any = 0;
  kflag: boolean = false;
  kcount: any = 0;
  lflag: boolean = false;
  lcount: any = 0;
  mflag: boolean = false;
  mcount: any = 0;
  nflag: boolean = false;
  ncount: any = 0;
  oflag: boolean = false;
  ocount: any = 0;
  pflag: boolean = false;
  pcount: any = 0;
  qflag: boolean = false;
  qcount: any = 0;
  rflag: boolean = false;
  rcount: any = 0;
  sflag: boolean = false;
  scount: any = 0;
  tflag: boolean = false;
  tcount: any = 0;
  uflag: boolean = false;
  ucount: any = 0;
  vflag: boolean = false;
  vcount: any = 0;
  wflag: boolean = false;
  wcount: any = 0;
  xflag: boolean = false;
  ycount: any = 0;
  yflag: boolean = false;
  zflag: boolean = false;
  zcount: any = 0;
  xcount: any;
  contactlength: any;

  constructor() { }

  ngOnInit() {
    this.getpartnercontact();
  }

  getpartnercontact(){
    var self = this;
    axios.get('http://103.214.233.141:3333/v1/secure/partners/contacts')
    .then(function (response) {
      console.log(response.data);
      for (let key in response.data){
        response.data[key].firstletter = response.data[key].name[0];
        if(response.data[key].firstletter == 'A' || response.data[key].firstletter == 'a'){
          self.aflag = true;
          self.acount = self.acount + 1;
        }
        else if(response.data[key].firstletter == 'B' || response.data[key].firstletter == 'b'){
          self.bflag = true;
          self.bcount = self.bcount + 1;
        }
        else if(response.data[key].firstletter == 'C' || response.data[key].firstletter == 'c'){
          self.cflag = true;
          self.ccount = self.ccount + 1;
        }
        else if(response.data[key].firstletter == 'D' || response.data[key].firstletter == 'd'){
          self.dflag = true;
          self.dcount = self.dcount + 1;
        }
        else if(response.data[key].firstletter == 'E' || response.data[key].firstletter == 'e'){
          self.eflag = true;
          self.ecount = self.ecount + 1;
        }
        else if(response.data[key].firstletter == 'F' || response.data[key].firstletter == 'f'){
          self.fflag = true;
          self.fcount = self.fcount + 1;
        }
        else if(response.data[key].firstletter == 'G' || response.data[key].firstletter == 'g'){
          self.gflag = true;
          self.gcount = self.gcount + 1;
        }
        else if(response.data[key].firstletter == 'H' || response.data[key].firstletter == 'h'){
          self.hflag = true;
          self.hcount = self.hcount + 1;
        }
        else if(response.data[key].firstletter == 'I' || response.data[key].firstletter == 'i'){
          self.iflag = true;
          self.icount = self.icount + 1;
        }
        else if(response.data[key].firstletter == 'J' || response.data[key].firstletter == 'j'){
          self.jflag = true;
          self.jcount = self.jcount + 1;
        }
        else if(response.data[key].firstletter == 'K' || response.data[key].firstletter == 'k'){
          self.kflag = true;
          self.kcount = self.kcount + 1;
        }
        else if(response.data[key].firstletter == 'L' || response.data[key].firstletter == 'l'){
          self.lflag = true;
          self.lcount = self.lcount + 1;
        }
        else if(response.data[key].firstletter == 'M' || response.data[key].firstletter == 'm'){
          self.mflag = true;
          self.mcount = self.mcount + 1;
        }
        else if(response.data[key].firstletter == 'N' || response.data[key].firstletter == 'n'){
          self.nflag = true;
          self.ncount = self.ncount + 1;
        }
        else if(response.data[key].firstletter == 'O' || response.data[key].firstletter == 'o'){
          self.oflag = true;
          self.ocount = self.ocount + 1;
        }
        else if(response.data[key].firstletter == 'P' || response.data[key].firstletter == 'p'){
          self.pflag = true;
          self.pcount = self.pcount + 1;
        }
        else if(response.data[key].firstletter == 'Q' || response.data[key].firstletter == 'q'){
          self.qflag = true;
          self.qcount = self.qcount + 1;
        }
        else if(response.data[key].firstletter == 'R' || response.data[key].firstletter == 'r'){
          self.rflag = true;
          self.rcount = self.rcount + 1;
        }
        else if(response.data[key].firstletter == 'S' || response.data[key].firstletter == 's'){
          self.sflag = true;
          self.scount = self.scount + 1;
        }
        else if(response.data[key].firstletter == 'T' || response.data[key].firstletter == 't'){
          self.tflag = true;
          self.tcount = self.tcount + 1;
        }
        else if(response.data[key].firstletter == 'U' || response.data[key].firstletter == 'u'){
          self.uflag = true;
          self.ucount = self.ucount + 1;
        }
        else if(response.data[key].firstletter == 'V' || response.data[key].firstletter == 'v'){
          self.vflag = true;
          self.vcount = self.vcount + 1;
        }
        else if(response.data[key].firstletter == 'W' || response.data[key].firstletter == 'w'){
          self.wflag = true;
          self.wcount = self.wcount + 1;
        }
        else if(response.data[key].firstletter == 'X' || response.data[key].firstletter == 'x'){
          self.xflag = true;
          self.xcount = self.xcount + 1;
        }
        else if(response.data[key].firstletter == 'Y' || response.data[key].firstletter == 'y'){
          self.yflag = true;
          self.ycount = self.ycount + 1;
        }
        else if(response.data[key].firstletter == 'Z' || response.data[key].firstletter == 'z'){
          self.zflag = true;
          self.zcount = self.zcount + 1;
        }
      }
      self.contacts = response.data;
      self.contactlength = response.data.length;

    })
    .catch(function (error) {
      console.log('An Error occured',  error);
     
    }); 
  }

  

}
