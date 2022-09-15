import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FetchForecastService {
  private apiForTable: string = "https://api.open-meteo.com/v1/forecast?latitude=51.5002&longitude=-0.1262&hourly=temperature_2m,relativehumidity_2m,rain,weathercode,surface_pressure&past_days=7";
  private apiForChart: string = "https://api.open-meteo.com/v1/forecast?latitude=51.5002&longitude=-0.1262&hourly=temperature_2m&past_days=7";

  constructor(private http: HttpClient) { }

  getForecastData(): Observable<any> {
    return this.http.get(this.apiForTable);
  }

  getTemperatureData(): Observable<any> {
    return this.http.get(this.apiForChart);
  }
}
