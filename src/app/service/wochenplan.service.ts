import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';
import { WochenplanEintrag, WochenplanEintragView } from '../model/wochenplan';

@Injectable({
  providedIn: 'root'
})
export class WochenplanService {

  private readonly URL = 'http://localhost:3000/wochenplan';

  constructor(private http: HttpClient) { }

  create(eintrag: WochenplanEintrag): Observable<any> {
    return this.http.post(
      this.URL,
      eintrag,
      { responseType: 'text' }
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  getAllEintraege(kw: number) : Observable<WochenplanEintragView[]> {
    return this.http.get<WochenplanEintragView[]>(this.URL + '/' + kw)
    .pipe(
      retry(3),
      map(eintrag =>
        eintrag.map(r => r),
      ),
      catchError(this.errorHandler)
    );
  }
  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error('Fehler aufgetreten!');
    return throwError(error);
  }
}
