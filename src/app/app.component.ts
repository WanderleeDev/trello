import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet />`,
  styles: `
    :host {
      color: var(--text-main-clr);
      background-color: var(--bg-main);
      transition:
        background-color 0.2s ease-in-out,
        color 0.2s ease-in-out;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @HostBinding('class.light')
  get isLightTheme() {
    return this.themeSvc.getTheme()() === 'light';
  }

  @HostBinding('class.dark')
  get isDarkTheme() {
    return this.themeSvc.getTheme()() === 'dark';
  }

  constructor(private readonly themeSvc: ThemeService) {}
}
