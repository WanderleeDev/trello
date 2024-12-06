import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconBaseComponent } from './icon-base/icon-base.component';

@Component({
  selector: 'app-view-icon',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 24 24"
  >
    <rect width="24" height="24" fill="none" />
    <path
      fill="currentColor"
      d="M3 11V3h8v8zm0 10v-8h8v8zm10-10V3h8v8zm0 10v-8h8v8zM5 9h4V5H5zm10 0h4V5h-4zm0 10h4v-4h-4zM5 19h4v-4H5zM9 9"
    />
  </svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewIconComponent extends IconBaseComponent {}
