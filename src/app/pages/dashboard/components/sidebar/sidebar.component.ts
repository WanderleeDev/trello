import { Component } from '@angular/core';
import { MatIconComponent } from '../../../../shared/ui/components/mat-icon/mat-icon.component';
import { LinkBtnComponent } from '../../../../shared/ui/components/link-btn/link-btn.component';
import { AccordionComponent } from '../accordion/accordion.component';
import { LetterGradientIconComponent } from '../../../../shared/icons/components/letter-gradient-icon.component';
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
      link: '/dashboard',
    },
    {
      icon: 'dashboard_customize',
      label: 'Templates',
      link: '/dashboard/templates',
    },
    {
      icon: 'trending_up',
      label: 'Entry',
      link: '/dashboard/entry',
    },
  ];

  protected readonly workspaces = [
    {
      icon: 'view_column',
      label: 'Boards',
      link: '/dashboard/boards',
    },
    {
      icon: 'favorite',
      label: 'Highlights',
      link: '/dashboard/highlights',
    },
    {
      icon: 'grid_view',
      label: 'Views',
      link: '/dashboard/home',
    },
    {
      icon: 'group',
      label: 'Members',
      link: '/dashboard/members',
    },
    {
      icon: 'settings',
      label: 'Settings',
      link: '/dashboard/settings',
    },
  ];
}
