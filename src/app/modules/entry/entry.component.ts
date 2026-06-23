import { Component } from '@angular/core';
import { StarIconComponent } from '../../shared/icons/components/star-icon.component';
import { ClockSvgComponent } from '../../shared/icons/components/clock-svg.component';
import { LinkCard } from '../../shared/interfaces/LinkCard.interface';
import { CardInfoComponent } from '../../shared/ui/components/card-info/card-info.component';
import { NgComponentOutlet, TitleCasePipe } from '@angular/common';
import { LinkCardComponent } from '../../shared/ui/components/link-card/link-card.component';
import { BtnBaseComponent } from '../../shared/ui/components/btn-base/btn-base.component';
import { AddSvgComponent } from '../../shared/icons/components/add-svg.component';

export interface Board {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  boards: LinkCard[];
}

@Component({
    selector: 'app-entry',
    templateUrl: './entry.component.html',
    standalone: true,
    imports: [
        CardInfoComponent,
        NgComponentOutlet,
        LinkCardComponent,
        BtnBaseComponent,
        AddSvgComponent,
        TitleCasePipe,
    ],
})
export class EntryComponent {
  image = 'https://trello.com/assets/e55b3540e5c1f06a51d7.svg';
  protected readonly data: Board[] = [
    {
      title: 'favorites',
      icon: StarIconComponent,
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
      icon: ClockSvgComponent,
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
