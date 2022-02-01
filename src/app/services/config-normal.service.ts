import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigNormalService {
  configuration$: Observable<any>;

  constructor(private readonly http: HttpClient) {
    this;
  }

  public loadConfigurations(): any {
    if (!this.configuration$) {
      this.configuration$ = this.http
        .get('assets/config.json')
        .pipe(shareReplay(1));
    }
    return this.configuration$;
  }
}
