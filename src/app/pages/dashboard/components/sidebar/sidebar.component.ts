import { Component } from '@angular/core';
import { TrelloIconComponent } from '../../../../shared/icons/components/trello-icon.component';
import { TemplateIconComponent } from '../../../../shared/icons/components/template-icon.component';
import { WaveIconComponent } from '../../../../shared/icons/components/wave-icon.component';
import { HeartIconComponent } from '../../../../shared/icons/components/heart-icon.component';
import { ViewIconComponent } from '../../../../shared/icons/components/view-icon.component';
import { MemberIconComponent } from '../../../../shared/icons/components/member-icon.component';
import { SettingsIconComponent } from '../../../../shared/icons/components/settings-icon.component';
import { LinkBtnComponent } from '../../../../shared/ui/components/link-btn/link-btn.component';
import { NgComponentOutlet } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';
import { LetterGradientIconComponent } from '../../../../shared/icons/components/letter-gradient-icon.component';
import { CardPremiumTryComponent } from '../card-premium-try/card-premium-try.component';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    standalone: true,
    imports: [
        LinkBtnComponent,
        NgComponentOutlet,
        AccordionComponent,
        LetterGradientIconComponent,
        CardPremiumTryComponent,
    ],
})
export class SidebarComponent {
  protected readonly sections = [
    {
      icon: TrelloIconComponent,
      label: 'Boards',
      link: '/dashboard',
    },
    {
      icon: TemplateIconComponent,
      label: 'Templates',
      link: '/dashboard/templates',
    },
    {
      icon: WaveIconComponent,
      label: 'Entry',
      link: '/dashboard/entry',
    },
  ];

  protected readonly workspaces = [
    {
      icon: TrelloIconComponent,
      label: 'Boards',
      link: '/board/entry',
    },
    {
      icon: HeartIconComponent,
      label: 'Highlights',
      link: '/board/templates',
    },
    {
      icon: ViewIconComponent,
      label: 'Views',
      link: '/board/home',
    },
    {
      icon: MemberIconComponent,
      label: 'Members',
      link: '/board/entry',
    },
    {
      icon: SettingsIconComponent,
      label: 'Settings',
      link: '/board/templates',
    },
  ];
}
