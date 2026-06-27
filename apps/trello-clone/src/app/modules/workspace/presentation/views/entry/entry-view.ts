import { Component } from '@angular/core';
import { LinkCard } from '../../../../../shared/interfaces/LinkCard.interface';
import { CardInfoComponent } from '../../../../../shared/presentation/components/card-info/card-info.component';
import { BtnBaseComponent } from '../../../../../shared/presentation/components/btn-base/btn-base.component';
import { MatIconComponent } from '../../../../../shared/presentation/components/mat-icon/mat-icon.component';

export interface Board {
  title: string;
  icon: string;
  boards: LinkCard[];
}

@Component({
  selector: 'app-entry',
  templateUrl: './entry-view.html',
  standalone: true,
  imports: [CardInfoComponent, MatIconComponent, BtnBaseComponent],
})
export default class EntryComponent {
  image = 'https://trello.com/assets/e55b3540e5c1f06a51d7.svg';
  protected readonly data: Board[] = [
    {
      title: 'favorites',
      icon: 'star',
      boards: [
        {
          id: 'd1e2f3a4-b5c6-7890-abcd-ef1234567890',
          name: 'Encriptador de texto - Alura Challenges ONE',
          path: '/boards/1',
          image: 'https://trello.com/assets/e55b3540e5c1f06a51d7.svg',
          description: 'Alura Challenges ONE',
        },
      ],
    },
    {
      title: 'recently viewed',
      icon: 'schedule',
      boards: [
        {
          id: 'e2f3a4b5-c6d7-8901-bcde-f12345678901',
          name: 'Encriptador de texto - Alura Challenges ONE',
          path: '/boards/1',
          image: 'https://trello.com/assets/e55b3540e5c1f06a51d7.svg',
          description: 'Alura Challenges ONE',
        },
      ],
    },
  ];
}
