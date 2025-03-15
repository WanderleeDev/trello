import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-all-templates-for-category',
  templateUrl: './all-templates-for-category.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllTemplatesForCategoryComponent {
  readonly category = input.required<string>();
}
