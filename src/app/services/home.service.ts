import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigAppInitializerService } from './config-app-initializer.service';
import { ConfigNormalService } from './config-normal.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  apiUrl: string;

  constructor(private http: HttpClient, private cn: ConfigNormalService, private ca: ConfigAppInitializerService) {
    this.ca.configuration$.subscribe((res) => {
      console.log("load config called", this.apiUrl);      
      this.apiUrl = res.apiUrl;
    });
  }

  public loadCountries() {
    console.log("load countries called", this.apiUrl);
    return this.http.get(this.apiUrl + 'all');
  }
}
