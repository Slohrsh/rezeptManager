import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

import { Rezept, RezeptRaw, Zutat } from '../model/rezept'
import { RezeptFactory } from '../model/rezeptFactory'

@Injectable({
  providedIn: 'root'
})
export class RezepteService {
  
  private readonly URL = 'http://localhost:3000/rezept';
  private readonly urlZutat = 'http://localhost:3000/zutat';

  constructor(private http: HttpClient) { }

  getAllRezepte(): Observable<Rezept[]> {
    return this.http.get<RezeptRaw[]>(this.URL)
    .pipe(
      retry(3),
      map(rezeptRaw =>
        rezeptRaw.map(r => RezeptFactory.fromRaw(r)),
      ),
      catchError(this.errorHandler)
    );
  }

  getRezept(id: string) : Observable<Rezept> {
      return this.http.get<RezeptRaw>(this.URL + '/' + id)
      .pipe(
        retry(3),
        map(r => RezeptFactory.fromRaw(r)),
        catchError(this.errorHandler)
      );
  }

  create(rezept: Rezept): Observable<any> {
    return this.http.post(
      `${this.URL}`,
      rezept,
      { responseType: 'text' }
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  getAllRezepteSearch(searchTerm: string): Observable<Rezept[]> {
    return this.http.get<Rezept[]>(
      `${this.URL}/search/${searchTerm}`
    ).pipe(
      retry(3),
      map(rezept => rezept.map(r => r),
      ),
      catchError(this.errorHandler)
    );
  }

  getAllZutatenSearch(searchTerm: string): Observable<Zutat[]> {
    return this.http.get<Zutat[]>(
      `${this.urlZutat}/search/${searchTerm}`
    ).pipe(
      retry(3),
      map(zutat => zutat.map(z => z),
      ),
      catchError(this.errorHandler)
    );
  }


  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error('Fehler aufgetreten!');
    return throwError(error);
  }
}
