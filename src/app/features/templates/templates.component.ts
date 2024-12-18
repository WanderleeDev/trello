import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Category, TemplateCategory } from './interfaces/template.interface';
import { templatesMockup } from './template.mockup';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatesComponent {
  protected readonly templates = signal<TemplateCategory[]>(templatesMockup);
  protected readonly categoryIcons: Record<Category, string> = {
    popular: 'https://trello.com/assets/32ad10f52fc078a76ea4.svg',
    business: 'https://trello.com/assets/6b1a625e841b96791d68.svg',
    design: 'https://trello.com/assets/e617072931480fdd44da.svg',
    education: 'https://trello.com/assets/070ebae9f7177f08cff6.svg',
    engineering: 'https://trello.com/assets/457121414fa10aa6029a.svg',
    marketing: 'https://trello.com/assets/3695bf4ae87a54c23f88.svg',
    'project-management': 'https://trello.com/assets/627d9e9f69fc255752cf.svg',
    remote: 'https://trello.com/assets/338e484944b19a8df667.svg',
  };
}
