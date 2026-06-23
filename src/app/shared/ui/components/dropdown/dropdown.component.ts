import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { BtnBaseComponent } from '../btn-base/btn-base.component';
import { OutsideClickDirective } from '../../../directives/outside-click.directive';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [BtnBaseComponent, OutsideClickDirective],
})
export class DropdownComponent {
  protected readonly isViewDropdown = signal(false);
  readonly direction = input<'left' | 'right'>('left');

  public toggleDropdown(e: Event): void {
    e.stopPropagation();
    this.isViewDropdown.update(value => !value);
  }

  public clickOutside(): void {
    this.isViewDropdown.set(false);
  }
}
