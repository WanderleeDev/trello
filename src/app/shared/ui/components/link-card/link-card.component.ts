import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LinkCard } from '../../../interfaces/LinkCard.interface';
import { LinkBtnComponent } from '../link-btn/link-btn.component';
import { NgOptimizedImage } from '@angular/common';
import { LetterGradientIconComponent } from '../../../icons/components/letter-gradient-icon.component';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [LinkBtnComponent, NgOptimizedImage, LetterGradientIconComponent, BadgeComponent],
})
export class LinkCardComponent {
  readonly name = input.required<string>();
  readonly path = input.required<string>();
  readonly image = input<string>();
  readonly description = input<string>();
  readonly badgeText = input<string>();
  readonly rounded = input<boolean>(false);
}
