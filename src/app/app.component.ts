import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { Portal } from './shared/presentation/components/portal/portal';

@Component({
  selector: 'app-root',
  template: `
    <ngx-sonner-toaster
      closeButton
      position="top-right"
      [toastOptions]="{
        unstyled: true,
        classes: {
          toast: 'flex items-center gap-2 rounded-lg px-4 py-3 shadow-xl text-sm font-sans',
          title: 'font-medium text-white',
          description: 'text-white/80 text-xs',
          closeButton: 'text-white/50 hover:text-white transition-colors',
          error: 'bg-red-600 text-white',
          success: 'bg-emerald-600 text-white',
          info: 'bg-[#0079BF] text-white',
        }
      }"
    />
    <router-outlet />
    <app-portal />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NgxSonnerToaster, Portal],
})
export class AppComponent {}
