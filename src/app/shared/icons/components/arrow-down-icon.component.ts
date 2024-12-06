import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconBaseComponent } from './icon-base/icon-base.component';

@Component({
  selector: 'app-arrow-down-icon',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 24 24"
  >
    <rect width="24" height="24" fill="none" />
    <path
      fill="currentColor"
      d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"
    />
  </svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowDownIconComponent extends IconBaseComponent {}
