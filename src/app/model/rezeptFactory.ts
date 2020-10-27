import { Observable, Observer } from 'rxjs';
import { Rezept, RezeptRaw } from './rezept';

export class RezeptFactory {

  static fromRaw(r: RezeptRaw): Rezept {    
    return {
      ...r
    };
  }
}

