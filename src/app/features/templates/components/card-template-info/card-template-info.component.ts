import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Template } from '../../interfaces/template.interface';

@Component({
  selector: 'app-card-template-info',
  templateUrl: './card-template-info.component.html',
  styleUrl: './card-template-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
