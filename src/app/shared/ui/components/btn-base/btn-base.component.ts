import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

type BtnType = 'submit' | 'button' | 'reset';
type BtnVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'base' | 'mixed';

@Component({
    selector: 'app-btn-base',
    templateUrl: './btn-base.component.html',
    styleUrl: './btn-base.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgClass],
})
export class BtnBaseComponent {
  activeStyle = input<boolean>(false);
  rounded = input<boolean>(false);
  btnType = input<BtnType>('button');
  variant = input<BtnVariant | null>(null);
  ariaLabel = input<string | null>(null);
}
