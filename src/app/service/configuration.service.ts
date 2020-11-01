import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public apiUrl = 'https://balina.uber.space/api'; //'http://localhost:3000';

  constructor() { }
}
