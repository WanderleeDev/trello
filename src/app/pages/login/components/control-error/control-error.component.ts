import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DefaultControlErrorComponent } from '@ngneat/error-tailor';

@Component({
  selector: 'app-control-error',
  templateUrl: './control-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorComponent extends DefaultControlErrorComponent {}
