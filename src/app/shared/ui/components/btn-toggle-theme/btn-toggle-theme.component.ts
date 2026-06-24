import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeToggleService } from 'ngx-theme-stack';
import { MoonIconComponent } from '../../../icons/components/moon-icon.component';
import { SunIconComponent } from '../../../icons/components/sun-icon.component';

@Component({
  selector: 'app-btn-toggle-theme',
  templateUrl: './btn-toggle-theme.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MoonIconComponent, SunIconComponent],
})
export class BtnToggleThemeComponent {
  protected readonly theme = inject(ThemeToggleService);
  protected readonly size = 28;
}
