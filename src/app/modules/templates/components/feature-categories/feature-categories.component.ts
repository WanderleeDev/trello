import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeatureCategories } from '../../interfaces/template.interface';
// import { FeatureCategories } from '../../interfaces/template.interface';

@Component({
  selector: 'app-feature-categories',
  templateUrl: './feature-categories.component.html',
  styleUrl: './feature-categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCategoriesComponent {
  protected readonly featureCategories: FeatureCategories = {
    business: 'https://trello.com/assets/3919e0fe0976de0298b4.svg',
    design: 'https://trello.com/assets/157c58403db677619bea.svg',
    education: 'https://trello.com/assets/dea39a045ff4c4d1d9b1.svg',
    engineering: 'https://trello.com/assets/e0b1e866de40a5468aaa.svg',
    marketing: 'https://trello.com/assets/757286ddcfc9b405911a.svg',
    'project-management': 'https://trello.com/assets/7d80b8fac2bac70d9e72.svg',
    remote: 'https://trello.com/assets/f03ecb89626f72d4a0aa.svg',
  };
}
