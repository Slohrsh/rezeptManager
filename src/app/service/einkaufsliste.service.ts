import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { EinkaufslisteEintrag } from '../model/einkaufsliste';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class EinkaufslisteService {
  
  

  private readonly URL = this.config.apiUrl + '/einkaufsliste';

  constructor(
    private http: HttpClient,
    private config: ConfigurationService) { }

  getAllEintraege(): Observable<EinkaufslisteEintrag[]> {
    return this.http.get<EinkaufslisteEintrag[]>(this.URL)
    .pipe(
      retry(3),
      map(rezeptRaw =>
        rezeptRaw.map(r => r),
      ),
      catchError(this.errorHandler)
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(
      `${this.URL}/${id}`,
      {
        responseType: 'text' 
      }
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  checked(checked: boolean, id: number): Observable<any> {
    return this.http.post(
      `${this.URL}/check`,
      { 
        id: id,
        checked: checked 
      },
      { responseType: 'text' }
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  create(rezeptId: number): Observable<any> {
    console.log('create einkauf');
    return this.http.post(
      `${this.URL}`,
      { rezeptId: rezeptId },
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
