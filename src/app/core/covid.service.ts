import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { IGlobal, ICountry } from '../store/covid/covid.model';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private _url: string = 'https://corona.lmao.ninja/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IGlobal> {
    // return of(JSON.parse(localStorage.getItem('all')));
    return this.http.get<IGlobal>(this._url + 'all').pipe(
      catchError(this.errorHandler)
    );
  }

  getCountries(): Observable<ICountry[]> {
    // return of(JSON.parse(localStorage.getItem('countries')));
    return this.http.get<ICountry[]>(this._url + 'countries').pipe(
      catchError(this.errorHandler)
    );
  }

  getIndiaStats(): Observable<ICountry> {
    // return of(JSON.parse(localStorage.getItem('india')));
    return this.http.get<ICountry>(this._url + 'countries/india').pipe(
      catchError(this.errorHandler)
    );
  }

  getHistorical(): Observable<any> {
    // return of(JSON.parse(localStorage.getItem('historical')));
    return this.http.get<any>(this._url + 'v2/historical').pipe(
      catchError(this.errorHandler)
    );
  }

  public errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
