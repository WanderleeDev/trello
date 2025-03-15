import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-simple-template',
  templateUrl: './simple-template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleTemplateComponent {
  readonly category = input.required<string>();
  readonly id = input.required<string>();
}
