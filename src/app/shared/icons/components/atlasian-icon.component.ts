import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconBaseComponent } from './icon-base/icon-base.component';

@Component({
  selector: 'app-atlasian-icon',
  template: `
    <svg
      fill="none"
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 32 32"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FFFFFF"
        d="M27.545 24.378 16.96 3.208c-.208-.458-.417-.541-.667-.541-.208 0-.458.083-.708.5-1.5 2.375-2.167 5.125-2.167 8 0 4.001 2.042 7.752 5.042 13.795.334.666.584.791 1.167.791h7.335c.541 0 .833-.208.833-.625 0-.208-.042-.333-.25-.75M12.168 14.377c-.834-1.25-1.084-1.334-1.292-1.334s-.333.083-.708.834L4.875 24.46c-.167.334-.208.459-.208.625 0 .334.291.667.916.667h7.46c.5 0 .875-.416 1.083-1.208.25-1 .334-1.876.334-2.917 0-2.917-1.292-5.751-2.292-7.251"
      ></path>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AtlasianIconComponent extends IconBaseComponent {}
