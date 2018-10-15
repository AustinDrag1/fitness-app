import { Injectable } from '@angular/core';

weather: String = "The weather in your area, for today, is ";
userWeather: String = "";
userLocation: String = "";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }
}

getUserWeather( location ) {
  userWeather = getWeather(userLocation);
  return weather + userWeather;
}
