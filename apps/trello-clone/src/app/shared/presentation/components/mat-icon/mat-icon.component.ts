import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-mat-icon',
  template: `<span
    class="material-symbols-outlined"
    [style.font-size.px]="size()"
    aria-hidden="true"
    >{{ name() }}</span
  >`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MatIconComponent {
  readonly name = input.required<string>();
  readonly size = input(24);
}
