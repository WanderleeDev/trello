import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    const text = value.trim();

    if (!text || text === '') throw new Error('Value must be a string');

    return text.charAt(0).toUpperCase + text.slice(1);
  }
}
