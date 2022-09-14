import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  temp!: number;
  tempUnit: string = "celsius";
  humidity!: number;
  heatIndex: number = -1;

  constructor() { }

  ngOnInit(): void {

  }

  onCalculate(): void {
    if (!this.validate()) {
      this.heatIndex = -1;
      return;
    }

    let temp = this.temp;
    if (this.tempUnit === "celsius") {
      temp = 9/5 * temp + 32;
    }

    this.heatIndex = -42.379 + (2.04901523 * temp) + (10.14333127 * this.humidity) -
      (0.22475541 * temp * this.humidity) - ((6.83783 * 10 ** -3) * (temp ** 2)) - (0.05481717 * (this.humidity ** 2)) +
      ((1.22874 * 10 ** -3) * (temp ** 2) * this.humidity) + ((8.5282 * 10 ** -4) * temp * (this.humidity ** 2)) -
      ((1.99 * 10 ** -6) * (temp ** 2) * (this.humidity ** 2));
    this.heatIndex = Math.round(this.heatIndex);
  }

  validate(): boolean {
    //todo validate inputs
    return true;
  }
}
