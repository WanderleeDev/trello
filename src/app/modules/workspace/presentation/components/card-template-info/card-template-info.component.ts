import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Template } from '../../views/template/interfaces/template.interface';
import { NgOptimizedImage, DecimalPipe } from '@angular/common';
import { TruncatePipe } from '../../../../../shared/pipes/truncate.pipe';
import { QuantityFormatPipe } from '../../../../../shared/pipes/quantity-format.pipe';

@Component({
    selector: 'app-card-template-info',
    templateUrl: './card-template-info.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgOptimizedImage,
        DecimalPipe,
        TruncatePipe,
        QuantityFormatPipe,
    ],
})
export class CardTemplateInfoComponent {
  cardData = input.required<Template>();
  pluralViews = computed(() => (this.cardData().views === 1 ? 'view' : 'views'));
  pluralCopies = computed(() => (this.cardData().copies === 1 ? 'copy' : 'copies'));
  isCommonAuthor = computed(
    () =>
      this.cardData().author.name === 'Trello Team' ||
      this.cardData().author.name === 'Trello Engineering Team' ||
      this.cardData().author.name === 'Atlassian',
  );
}
