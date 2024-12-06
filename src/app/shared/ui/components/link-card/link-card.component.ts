import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LinkCard } from '../../../interfaces/LinkCard.interface';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkCardComponent {
  readonly data = input.required<LinkCard>();
  readonly badgeText = input<string>();
  readonly rounded = input<boolean>(false);
}
