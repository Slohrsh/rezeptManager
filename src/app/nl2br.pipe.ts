import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nl2br'
})
export class Nl2brPipe implements PipeTransform {

  transform(value: string): string {
    let macReplaced = value.replace(/\r/g, '<br/>');
    return macReplaced.replace(/\n/g, '<br/>');
  }

}
