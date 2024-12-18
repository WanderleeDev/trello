import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityFormat',
})
export class QuantityFormatPipe implements PipeTransform {
  transform(value: string | number | null): string {
    if (!value) return '';

    const hasZero = value.toString().endsWith('00');

    return hasZero ? `${value.toString().slice(0, -2)}K` : value.toString();
  }
}
