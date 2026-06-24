import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeToggleService } from 'ngx-theme-stack';

@Component({
  selector: 'app-btn-toggle-theme',
  templateUrl: './btn-toggle-theme.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class BtnToggleThemeComponent {
  protected readonly theme = inject(ThemeToggleService);
  protected readonly size = 28;
}
