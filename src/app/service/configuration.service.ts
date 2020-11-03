import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  //public appUrl = 'https://balina.uber.space';
  // public appUrl = 'http://localhost:3000';
  public appUrl = 'https://rezept-manager-api.herokuapp.com'
  public apiUrl = `${this.appUrl}/api`;
  
  constructor() { }
}