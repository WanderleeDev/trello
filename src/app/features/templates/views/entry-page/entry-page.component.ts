import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Category, FeatureCategories, TemplateCategory } from '../../interfaces/template.interface';
import { templatesMockup } from '../../template.mockup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryPageComponent {
  readonly #router = inject(Router);

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

  protected readonly featureCategories: FeatureCategories = {
    business: 'https://trello.com/assets/3919e0fe0976de0298b4.svg',
    design: 'https://trello.com/assets/157c58403db677619bea.svg',
    education: 'https://trello.com/assets/dea39a045ff4c4d1d9b1.svg',
    engineering: 'https://trello.com/assets/e0b1e866de40a5468aaa.svg',
    marketing: 'https://trello.com/assets/757286ddcfc9b405911a.svg',
    'project-management': 'https://trello.com/assets/7d80b8fac2bac70d9e72.svg',
    remote: 'https://trello.com/assets/f03ecb89626f72d4a0aa.svg',
  };

  public navigateTo(path: string): void {
    this.#router.navigate([`home/templates/${path}`]);
  }
}
