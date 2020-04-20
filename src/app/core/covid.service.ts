import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { IGlobal, ICountry, IHistoricalCountry } from '../store/covid/covid.model';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private _url: string = 'https://corona.lmao.ninja/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IGlobal> {
    // return of(<IGlobal> JSON.parse(localStorage.getItem('all')));
    return this.http.get<IGlobal>(this._url + 'v2/all').pipe(
      // tap(res => localStorage.setItem('all', JSON.stringify(res))),
      catchError(this.errorHandler)
    );
  }

  getCountries(): Observable<ICountry[]> {
    // return of(<ICountry[]> JSON.parse(localStorage.getItem('countries')));
    return this.http.get<ICountry[]>(this._url + 'v2/countries').pipe(
      // tap(res => localStorage.setItem('countries', JSON.stringify(res))),
      catchError(this.errorHandler)
    );
  }

  getIndiaStats(): Observable<ICountry> {
    // return of(<ICountry> JSON.parse(localStorage.getItem('india')));
    return this.http.get<ICountry>(this._url + 'v2/countries/india').pipe(
      // tap(res => localStorage.setItem('india', JSON.stringify(res))),
      catchError(this.errorHandler)
    );
  }

  getHistorical(): Observable<IHistoricalCountry[]> {
    // return of(<IHistoricalCountry[]> JSON.parse(localStorage.getItem('historical')));
    return this.http.get<any>(this._url + 'v2/historical').pipe(
      // tap(res => localStorage.setItem('historical', JSON.stringify(res))),
      catchError(this.errorHandler)
    );
  }

  public errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
