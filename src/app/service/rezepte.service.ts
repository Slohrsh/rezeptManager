import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

import { Rezept, RezeptRaw, Zutat } from '../model/rezept'
import { RezeptFactory } from '../model/rezeptFactory'
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class RezepteService {
  
  
  
  private readonly rezeptUrl = this.config.apiUrl + '/rezept';
  private readonly zutatUrl = this.config.apiUrl +  '/zutat';

  constructor(
    private http: HttpClient,
    private config: ConfigurationService) { }

  getAllRezepte(): Observable<Rezept[]> {
    return this.http.get<RezeptRaw[]>(this.rezeptUrl)
    .pipe(
      retry(3),
      map(rezeptRaw =>
        rezeptRaw.map(r => RezeptFactory.fromRaw(r)),
      ),
      catchError(this.errorHandler)
    );
  }

  getRezept(id: string) : Observable<Rezept> {
      return this.http.get<RezeptRaw>(this.rezeptUrl + '/' + id)
      .pipe(
        retry(3),
        map(r => RezeptFactory.fromRaw(r)),
        catchError(this.errorHandler)
      );
  }

  create(rezept: Rezept): Observable<any> {
    return this.http.post(
      `${this.rezeptUrl}`,
      rezept,
      { responseType: 'text' }
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  update(rezept: Rezept): Observable<any> {
    return this.http.patch(
      `${this.rezeptUrl}`,
      rezept,
      { responseType: 'text' }
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  delete(rezeptId: number): Observable<any> {
    return this.http.delete(
      this.rezeptUrl + '/' + rezeptId,
      { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getAllRezepteSearch(searchTerm: string): Observable<Rezept[]> {
    return this.http.get<Rezept[]>(
      `${this.rezeptUrl}/search/${searchTerm}`
    ).pipe(
      retry(3),
      map(rezept => rezept.map(r => r),
      ),
      catchError(this.errorHandler)
    );
  }

  getAllZutatenSearch(searchTerm: string): Observable<Zutat[]> {
    return this.http.get<Zutat[]>(
      `${this.zutatUrl}/search/${searchTerm}`
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
