import { Pipe, type PipeTransform } from '@angular/core';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

@Pipe({
  name: 'cn',
})
export class CnPipe implements PipeTransform {
  transform(...inputs: string[]): unknown {
    return twMerge(clsx(inputs));
  }
}
