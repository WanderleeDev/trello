import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export default class UnderConstructionComponent {}
