import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';
  data?: WeatherData;
  city : string="New Delhi";
  forecasts?: any[]; // Variable to store array data

  constructor(private weatherService: WeatherService){
    
  }

  ngOnInit(): void {
    this.getWeather(this.city);
  }

  getWeather(city: string) {
    this.weatherService.getWeather(city)
      .subscribe((response) => {
        console.log(response);
        this.data = response; // Process API response data
        this.forecasts=response.forecasts;
      });
  }

  fetchData(): void{
    this.getWeather(this.city);
  }
}
