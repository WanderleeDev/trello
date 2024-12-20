import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconBaseComponent } from './icon-base/icon-base.component';

@Component({
  selector: 'app-ray-svg',
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      role="presentation"
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1838 4.78749C10.2664 4.61167 10.4433 4.49957 10.6375 4.5L17.0011 4.51406C17.1951 4.51449 17.3713 4.62709 17.4532 4.80294C17.5352 4.97879 17.508 5.18614 17.3835 5.33492L13.9446 9.44482H16.8597C17.0645 9.44482 17.2486 9.5697 17.3243 9.76C17.4 9.95029 17.352 10.1675 17.2032 10.3082L7.62319 19.3634C7.44433 19.5324 7.16903 19.5462 6.97421 19.3958C6.77938 19.2454 6.72297 18.9756 6.84122 18.7598L9.86254 13.2448H7C6.82891 13.2448 6.66969 13.1573 6.57795 13.0129C6.48621 12.8685 6.47469 12.6872 6.54741 12.5323L10.1838 4.78749Z"
        fill="currentColor"
      ></path>
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaySvgComponent extends IconBaseComponent {}