import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pesel = '';
  isTrue = false;

  testPesel() {
    return this.isTrue ? 'OK' : 'NO OK';
  }

  checkPesel() {
    const weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let sum = 0;
    const controlNumber = parseInt(this.pesel.substring(10, 11));
    for (let i = 0; i < weight.length; i++) {
      sum += (parseInt(this.pesel.substring(i, i + 1)) * weight[i]);
    }
    sum = sum % 10;
    this.isTrue = 10 - sum === controlNumber;
  }

}
