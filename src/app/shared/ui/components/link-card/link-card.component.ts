import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LinkCard } from '../../../interfaces/LinkCard.interface';
import { LinkBtnComponent } from '../link-btn/link-btn.component';
import { NgOptimizedImage } from '@angular/common';
import { LetterGradientIconComponent } from '../../../icons/components/letter-gradient-icon.component';
import { BadgeComponent } from '../badge/badge.component';

@Component({
    selector: 'app-link-card',
    templateUrl: './link-card.component.html',
    styleUrls: ['./link-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        LinkBtnComponent,
        NgOptimizedImage,
        LetterGradientIconComponent,
        BadgeComponent,
    ],
})
export class LinkCardComponent {
  readonly data = input.required<LinkCard>();
  readonly badgeText = input<string>();
  readonly rounded = input<boolean>(false);
}
