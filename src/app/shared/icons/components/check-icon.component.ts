import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconBaseComponent } from './icon-base/icon-base.component';

@Component({
  selector: 'app-check-icon',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 24 24"
  >
    <rect width="24" height="24" fill="none" />
    <path
      fill="currentColor"
      d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
    />
  </svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckIconComponent extends IconBaseComponent {}
