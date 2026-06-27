import { Component } from '@angular/core';
import { MatIconComponent } from '../../../../../../shared/components/mat-icon/mat-icon.component';
import { LinkBtnComponent } from '../../../../../../shared/components/link-btn/link-btn.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { LetterGradientIconComponent } from '../../../../../../shared/icons/components/letter-gradient-icon.component';
import { CardPremiumTryComponent } from '../card-premium-try/card-premium-try.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  standalone: true,
  imports: [
    LinkBtnComponent,
    MatIconComponent,
    AccordionComponent,
    LetterGradientIconComponent,
    CardPremiumTryComponent,
  ],
})
export class SidebarComponent {
  protected readonly sections = [
    {
      icon: 'view_column',
      label: 'Boards',
      link: '/workspace',
    },
    {
      icon: 'dashboard_customize',
      label: 'Templates',
      link: '/workspace/templates',
    },
    {
      icon: 'trending_up',
      label: 'Entry',
      link: '/workspace/entry',
    },
  ];

  protected readonly workspaces = [
    {
      icon: 'view_column',
      label: 'Boards',
      link: '/under-construction',
    },
    {
      icon: 'favorite',
      label: 'Highlights',
      link: '/under-construction',
    },
    {
      icon: 'grid_view',
      label: 'Views',
      link: '/under-construction',
    },
    {
      icon: 'group',
      label: 'Members',
      link: '/under-construction',
    },
    {
      icon: 'settings',
      label: 'Settings',
      link: '/under-construction',
    },
  ];
}
