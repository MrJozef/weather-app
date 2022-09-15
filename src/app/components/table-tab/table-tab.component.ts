import {Component, OnInit, ViewChild} from '@angular/core';
import { FetchForecastService } from "../../services/fetch-forecast.service";
import {formatDate} from "@angular/common";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-table-tab',
  templateUrl: './table-tab.component.html',
  styleUrls: ['./table-tab.component.css']
})
export class TableTabComponent implements OnInit {
  displayedColumns: string[] = ["time", "temp", "humidity", "rain", "pressure", "weathercode"];
  forecastData!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
      pom = pom.map((x:any) => {return {"rain": x[0], "humidity": x[1], "pressure": x[2], "temp": x[3],
        "time": x[4], "weathercode": x[5]} });

      this.forecastData = new MatTableDataSource<any>(pom);
      this.forecastData.sort = this.sort;
      this.forecastData.paginator = this.paginator;
    });
  }

  // https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
  transpose(matrix: any) {
    return matrix[0].map((col:any, i:any) => matrix.map((row:any) => row[i]));
  }

  applyFilter(value: string) {
    this.forecastData.filter = value.trim().toLowerCase();
  }
}
