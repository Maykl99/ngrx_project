import { Flat } from './../classes/Flat';
import { FlatsResponse } from './../interfaces/FlatsResponse';
import { FlatResponse } from './../interfaces/FlatResponse';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FlatInterface } from './../interfaces/flat';
import { combineLatest, from, Observable, throwError } from "rxjs";
import { ErrorHandler, Injectable } from '@angular/core';
import { catchError, filter } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class FlatserviceService implements FlatsResponse{
  data: [];
  flats: Array<Flat> = [];

  private API_URL = "http://localhost:8000/api/flats/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }


  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

    // APPARTAMENTI
    getFlats(): Observable<Flat[]>
    {
      return this.http.get<Flat[]>(this.API_URL); //this.http.get<FlatResponse>(this.API_URL);
    }

    // SINGOLO APP.
    find(id): Observable<Flat> {
      return this.http.get<Flat>(this.API_URL + id)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    // ELIMINA APPARTAMENTO
    deleteFlat(id): Observable<Flat>{
      return this.http.delete<Flat>(this.API_URL + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }

    // AGGIORNA APPARTAMENTO
    updateFlat(id, flat): Observable<Flat[]>{
      return this.http.put<Flat[]>(this.API_URL + id, flat, this.httpOptions);
    }

    // CREA APPARTAMENTO
    createFlat(flat)
    {
      return this.http.post<Flat[]>(this.API_URL, flat, this.httpOptions);
    }
}
