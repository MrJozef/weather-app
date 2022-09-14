import { Component, OnInit } from '@angular/core';
import { FetchForecastService } from "../../services/fetch-forecast.service";
import {formatDate} from "@angular/common";


@Component({
  selector: 'app-table-tab',
  templateUrl: './table-tab.component.html',
  styleUrls: ['./table-tab.component.css']
})
export class TableTabComponent implements OnInit {
  displayedColumns: string[] = ["time", "temp", "humidity", "rain", "pressure", "weathercode"];
  forecastData: any = null;

  constructor(private fetchForecastService: FetchForecastService) {
  }

  ngOnInit(): void {
    this.fetchForecastService.getForecastData().subscribe((data) => {
      let pom = data.hourly;//todo catch atď.

      // change format of date strings
      pom.time = pom.time.map((x:string) => formatDate(x, 'd.L.YYYY H:mm', 'en-US'));

      // https://stackoverflow.com/questions/61791902/convert-column-arrays-to-array-of-row-objects
      pom = [pom.rain, pom.relativehumidity_2m, pom.surface_pressure, pom.temperature_2m, pom.time, pom.weathercode];
      pom = this.transpose(pom);
      this.forecastData = pom.map((x:any) => {return {"rain": x[0], "humidity": x[1], "pressure": x[2], "temp": x[3],
        "time": x[4], "weathercode": x[5]} });
      console.log(this.forecastData);
    });
  }

  // https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
  transpose(matrix: any) {
    return matrix[0].map((col:any, i:any) => matrix.map((row:any) => row[i]));
  }
}
