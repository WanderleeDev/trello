import { Pipe, type PipeTransform } from '@angular/core';

type Coincidence = 'first' | 'all';

@Pipe({
  name: 'searchAndReplace',
})
export class SearchAndReplacePipe implements PipeTransform {
  transform(
    value: string,
    search: string,
    replace: string,
    coincidence: Coincidence = 'first',
  ): string {
    if (!value.trim()) return value;

    return coincidence === 'all'
      ? value.replaceAll(search, replace)
      : value.replace(search, replace);
  }
}
