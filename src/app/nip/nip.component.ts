import { Component, OnInit } from '@angular/core';
import { registerContentQuery } from '@angular/core/src/render3';
import { isFulfilled } from 'q';

@Component({
  selector: 'app-nip',
  templateUrl: './nip.component.html',
  styleUrls: ['./nip.component.scss']
})
export class NIPComponent implements OnInit {
  isTrue = false;

  constructor() { }

  nip: string = "000-000-00-00";

  testNip() {
    return this.isTrue ? 'OK' : 'NO OK';
  }


  onKey(event) {
      if(typeof this.nip !== 'string')
          return false;
  
      this.nip = this.nip.replace(/[\ \-]/gi, '');
  
      let weight = [6, 5, 7, 2, 3, 4, 5, 6, 7];
      let sum = 0;
      let controlNumber = parseInt(this.nip.substring(9, 10));
      for (let i = 0; i < weight.length; i++) {
          sum += (parseInt(this.nip.substring(i, i + 1)) * weight[i]);
      }
      
      this.isTrue =  sum % 11 === controlNumber;

  }

  ngOnInit() {
  }

}
