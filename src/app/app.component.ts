import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Portal } from './shared/components/portal/portal';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet />
    <app-portal />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Portal],
})
export class AppComponent {}
