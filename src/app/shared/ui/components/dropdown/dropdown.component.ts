import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
