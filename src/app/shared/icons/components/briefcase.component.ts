import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconBaseComponent } from './icon-base/icon-base.component';

@Component({
  selector: 'app-briefcase',
  template: `<svg
    [attr.width]="size()"
    [attr.height]="size()"
    role="presentation"
    focusable="false"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V6H19V20H5V6H7V5ZM9 6H15V5H9V6ZM7 9C7 8.44772 7.44772 8 8 8H10C10.5523 8 11 8.44772 11 9V16C11 16.5523 10.5523 17 10 17H8C7.44772 17 7 16.5523 7 16V9ZM14 8C13.4477 8 13 8.44772 13 9V14C13 14.5523 13.4477 15 14 15H16C16.5523 15 17 14.5523 17 14V9C17 8.44772 16.5523 8 16 8H14Z"
      fill="currentColor"
    ></path>
    <path
      d="M4 6C2.89543 6 2 6.89543 2 8V18C2 19.1046 2.89543 20 4 20L4 6Z"
      fill="currentColor"
    ></path>
    <path
      d="M20 20V6C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20Z"
      fill="currentColor"
    ></path>
  </svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BriefcaseComponent extends IconBaseComponent {}
