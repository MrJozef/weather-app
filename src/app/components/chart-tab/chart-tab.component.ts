import { Component, OnInit } from '@angular/core';
import { FetchForecastService } from "../../services/fetch-forecast.service";
import { Chart, registerables } from "chart.js";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-chart-tab',
  templateUrl: './chart-tab.component.html',
  styleUrls: ['./chart-tab.component.css']
})
export class ChartTabComponent implements OnInit {

  constructor(private fetchForecastService: FetchForecastService) { }

  ngOnInit(): void {
    this.fetchForecastService.getTemperatureData().subscribe((data) => {
      Chart.register(...registerables);

      const myTime = data.hourly.time.map((x:string) => formatDate(x, 'd.L.YYYY H:mm', 'en-US'));
      const myChart = new Chart("chart", {
        type: 'line',
        data: {
          labels: myTime,
          datasets: [{
            label: 'Temperature in London (\u00B0C)',
            data: data.hourly.temperature_2m,
            borderColor: 'rgb(255,64,129)',
            backgroundColor: 'rgb(255,64,129)',
            borderWidth: 2,
            tension: 0.1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }
}
