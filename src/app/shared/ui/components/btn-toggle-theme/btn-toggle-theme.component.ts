import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { ThemeService } from '../../../../shared/services/theme.service';

@Component({
  selector: 'app-btn-toggle-theme',
  templateUrl: './btn-toggle-theme.component.html',
  styleUrl: './btn-toggle-theme.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnToggleThemeComponent {
  $currentTheme = computed(() => this.themeSvc.getTheme()());
  protected readonly size = 28;

  constructor(private readonly themeSvc: ThemeService) {}

  public toggleTheme(): void {
    this.themeSvc.toggleTheme();
  }
}
