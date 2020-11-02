import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public appUrl = 'https://balina.uber.space';
  // public appUrl = 'http://localhost:3000';
  public apiUrl = `${this.appUrl}/api`;
  
  constructor() { }
}