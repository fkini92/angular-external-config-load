import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  countries: any;

  constructor(private hs: HomeService) {
    hs.loadCountries().subscribe((res) => {
      this.countries = res;
    });
  }
}
