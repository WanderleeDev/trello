import { Component } from '@angular/core';
import { LinkCard } from '../../shared/interfaces/LinkCard.interface';
import { CardInfoComponent } from '../../shared/presentation/components/card-info/card-info.component';
import { TitleCasePipe } from '@angular/common';
import { BtnBaseComponent } from '../../shared/presentation/components/btn-base/btn-base.component';
import { MatIconComponent } from '../../shared/presentation/components/mat-icon/mat-icon.component';

export interface Board {
  title: string;
  icon: string;
  boards: LinkCard[];
}

@Component({
    selector: 'app-entry',
    templateUrl: './entry.component.html',
    standalone: true,
    imports: [
        CardInfoComponent,
        MatIconComponent,
        BtnBaseComponent,
        TitleCasePipe,
    ],
})
export default class EntryComponent {
  image = 'https://trello.com/assets/e55b3540e5c1f06a51d7.svg';
  protected readonly data: Board[] = [
    {
      title: 'favorites',
      icon: 'star',
      boards: [
        {
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
          name: 'Encriptador de texto - Alura Challenges ONE',
          path: '/boards/1',
          image: 'https://trello.com/assets/e55b3540e5c1f06a51d7.svg',
          description: 'Alura Challenges ONE',
        },
      ],
    },
  ];
}
