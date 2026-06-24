import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LinkCard } from '../../../../shared/interfaces/LinkCard.interface';
import { SearchIconComponent } from '../../../icons/components/search-icon.component';
import { OutsideClickDirective } from '../../../directives/outside-click.directive';
import { LinkCardComponent } from '../link-card/link-card.component';
import { LoaderIconComponent } from '../../../icons/components/loader-icon.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SearchIconComponent, OutsideClickDirective, LoaderIconComponent],
})
export class SearchBarComponent {
  mockup: LinkCard[] = [
    {
      name: 'Simple Project Board',
      path: '/board',
      image:
        'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x270/efea59b89ada0934c5256715fb180bd9/photo-1463107971871-fbac9ddb920f.jpg',
      description: 'Private workspace',
    },
    {
      name: 'Kanban Template',
      path: '/board',
      image:
        'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x322/47f09f0e3910259568294477d0bdedac/photo-1576502200916-3808e07386a5.jpg',
      description: 'Private workspace',
    },
    {
      name: 'Project Management',
      path: '/board',
      image:
        'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x336/24baa6609b89fb8eb0cc0aceb70eaf36/photo-1557682250-33bd709cbe85.jpg',
      description: 'Private workspace',
    },
    {
      name: 'My Trello Board',
      path: '/board',
      image: '',
    },
  ];

  isViewResults = signal(false);

  public showResults(e: Event): void {
    e.stopPropagation();
    this.isViewResults.set(true);
  }

  public clickOutside(): void {
    this.isViewResults.set(false);
  }
}
