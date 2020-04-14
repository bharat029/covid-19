import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private _url: string = 'https://api.covid19api.com/';

  constructor(private http: HttpClient) { }

  getSummary(): Observable<any> {
    return this.http.get(this._url + 'summary').pipe(
      catchError(this.errorHandler)
    );
  }

  public errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
