import { Component, computed, input } from '@angular/core';
import { CardInfo } from '../../interfaces/template.interface';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent {
  cardData = input.required<CardInfo>();
  pluralViews = computed(() => (this.cardData().views === 1 ? 'view' : 'views'));
  pluralCopies = computed(() => (this.cardData().copies === 1 ? 'copy' : 'copies'));
  isCommonAuthor = computed(
    () =>
      this.cardData().author.name === 'Trello Team' ||
      this.cardData().author.name === 'Trello Engineering Team' ||
      this.cardData().author.name === 'Atlassian',
  );
}
