import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { Portal } from './shared/presentation/components/portal/portal';

@Component({
  selector: 'app-root',
  template: `
    <ngx-sonner-toaster richColors closeButton position="top-right" />
    <router-outlet />
    <app-portal />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NgxSonnerToaster, Portal],
})
export class AppComponent {}
