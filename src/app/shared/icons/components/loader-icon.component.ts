import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconBaseComponent } from './icon-base/icon-base.component';

@Component({
  selector: 'app-loader-icon',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" [attr.width]="size()" [attr.height]="size()">
      <style>
        .line {
          fill: none;
          stroke: #aaa;
          stroke-width: 8;
          stroke-dasharray: 40;
        }

        .animated {
          animation: draw 0.8s ease-in-out;
          animation-iteration-count: infinite;
          stroke-dashoffset: 0;
        }

        .line2 {
          animation-delay: 0.08s;
        }

        .line3 {
          animation-delay: 0.16s;
        }

        @keyframes draw {
          0% {
            stroke-dashoffset: 0;
          }

          50% {
            stroke-dashoffset: 30;
          }

          100% {
            stroke-dashoffset: 0;
          }
        }
      </style>
      <line class="line animated" x1="14" y1="10" x2="14" y2="50" />
      <line class="line animated line2" x1="30" y1="10" x2="30" y2="50" />
      <line class="line animated line3" x1="46" y1="10" x2="46" y2="50" />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderIconComponent extends IconBaseComponent {}
