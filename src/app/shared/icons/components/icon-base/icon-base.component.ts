import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon-base',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBaseComponent {
  readonly size = input<number>(16);
}
