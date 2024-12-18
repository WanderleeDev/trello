import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  template: `<span class="badge">{{ content() }}</span>`,
  styles: `
    .badge {
      display: inline-block;
      text-transform: capitalize;
      font-size: 0.7rem;
      background-color: var(--btn-hovered);
      border-radius: 0.2rem;
      padding: 0 0.2rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  readonly content = input.required<string>();
}
