import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceDigits'
})
export class SpaceDigitsPipe implements PipeTransform {
  transform(value: string): string {
    // Remove espaços existentes e adiciona um espaço a cada quatro dígitos
    const numericValue = value.replace(/\D/g, '');
    return numericValue.replace(/(\d{4})/g, '$1 ');
  }
}