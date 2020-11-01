import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { WochenplanEintrag } from '../model/wochenplan';
import { Favorit, FavoritDisplayView } from '../model/favorit';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritService {
  
  private readonly URL = this.config.apiUrl + '/favorit';

  constructor(
    private http: HttpClient,
    private config: ConfigurationService) { }

  getAllFavoriten(): Observable<FavoritDisplayView[]> {
    return this.http.get<FavoritDisplayView[]>(this.URL)
    .pipe(
      retry(3),
      map(rezeptRaw =>
        rezeptRaw.map(r => r),
      ),
      catchError(this.errorHandler)
    );
  }

  create(favorit: Favorit): Observable<any> {
    return this.http.post(
      `${this.URL}`,
      favorit,
      { responseType: 'text' }
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error('Fehler aufgetreten!');
    return throwError(error);
  }
}
