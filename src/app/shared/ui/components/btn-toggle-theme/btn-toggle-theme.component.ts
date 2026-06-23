import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { ThemeService } from '../../../../shared/services/theme.service';
import { MoonIconComponent } from '../../../icons/components/moon-icon.component';
import { SunIconComponent } from '../../../icons/components/sun-icon.component';

@Component({
    selector: 'app-btn-toggle-theme',
    templateUrl: './btn-toggle-theme.component.html',
    styleUrl: './btn-toggle-theme.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MoonIconComponent, SunIconComponent],
})
export class BtnToggleThemeComponent {
  $currentTheme = computed(() => this.themeSvc.getTheme()());
  protected readonly size = 28;

  constructor(private readonly themeSvc: ThemeService) {}

  public toggleTheme(): void {
    this.themeSvc.toggleTheme();
  }
}
