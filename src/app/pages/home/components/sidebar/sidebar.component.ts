import { Component } from '@angular/core';
import { TrelloIconComponent } from '../../../../shared/icons/components/trello-icon.component';
import { TemplateIconComponent } from '../../../../shared/icons/components/template-icon.component';
import { WaveIconComponent } from '../../../../shared/icons/components/wave-icon.component';
import { HeartIconComponent } from '../../../../shared/icons/components/heart-icon.component';
import { ViewIconComponent } from '../../../../shared/icons/components/view-icon.component';
import { MemberIconComponent } from '../../../../shared/icons/components/member-icon.component';
import { SettingsIconComponent } from '../../../../shared/icons/components/settings-icon.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  protected readonly sections = [
    {
      icon: TrelloIconComponent,
      label: 'Boards',
      link: '/board/entry',
    },
    {
      icon: TemplateIconComponent,
      label: 'Templates',
      link: '/board/templates',
    },
    {
      icon: WaveIconComponent,
      label: 'Home',
      link: '/board/home',
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
