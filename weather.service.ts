import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WeatherData } from '../models/weather.model';
import { environment } from 'src/environments/environment.dev';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private http:HttpClient) 
  { 

  }

  getWeather(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.apiUrl, {
      headers: new HttpHeaders()
      .set('X-RapidAPI-Key',environment.apiKey)
      .set('X-RapidAPI-Host',environment.apiHost),
      params: new HttpParams()
      .set('location',city)
      .set('u','c')
      .set('format','json')
    })
  }
}
