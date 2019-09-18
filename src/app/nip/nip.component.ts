import { Component, OnInit } from '@angular/core';
import { registerContentQuery } from '@angular/core/src/render3';
import { isFulfilled } from 'q';

@Component({
  selector: 'app-nip',
  templateUrl: './nip.component.html',
  styleUrls: ['./nip.component.scss']
})
export class NIPComponent implements OnInit {

  constructor() { }

  nip: string = "000-000-00-00";
  nipWagi = [6,5,7,2,3,4,5,6,7];

  onKey(event) {

    this.nip = this.nip.replace("-", " ");

    var nip = this.nip;

    var reg = /^[0-9]{10}$/;
   
    if (nip.length == 10 && reg.test(nip)) {

      var tmpNIP = parseInt(nip[0])*this.nipWagi[0];

      for(var i = 1; i<9; i++)
      {

        tmpNIP += parseInt(nip[i])*this.nipWagi[i];
      }

      tmpNIP = tmpNIP % 11;

      if(tmpNIP==10)tmpNIP=0;

      var preg = new RegExp("/[0-9] {9}("+ tmpNIP +")/");


      this.nip = 
      nip.slice(0, 3) +
      "-" + 
      nip.slice(3, 6) + 
      "-" +
      nip.slice(6, 8) + 
      "-" + 
      nip.slice(8, 10);
    }

    event.srcElement.value = this.nip;
    console.log(event);
  }

  ngOnInit() {
  }

}
