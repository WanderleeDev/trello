import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconBaseComponent } from './icon-base/icon-base.component';

@Component({
  selector: 'app-add-svg',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1"
      />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddSvgComponent extends IconBaseComponent {}
