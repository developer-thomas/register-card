import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceDigits',
})
export class SpaceDigitsPipe implements PipeTransform {
  transform(value: any) {
    // Remove espaços existentes e adiciona um espaço a cada quatro dígitos
    let transformToString = JSON.stringify(value);
    const numericValue = transformToString.replace(/\D/g, '');
    return numericValue.replace(/(\d{4})(?=\d)/g, '$1 ');
  }
}
