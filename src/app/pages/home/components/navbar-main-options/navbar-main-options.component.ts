import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { BoardTemplate } from '../../../../shared/mockup/templates';

@Component({
  selector: 'app-navbar-main-options',
  templateUrl: './navbar-main-options.component.html',
  styleUrl: './navbar-main-options.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarMainOptionsComponent {
  readonly workspace = input.required<BoardTemplate[]>();
  readonly boardRecent = input.required<BoardTemplate[]>();
  readonly boardStarred = input.required<BoardTemplate[]>();
  readonly templates = input.required<BoardTemplate[]>();

  constructor(private readonly router: Router) {}

  public redirectHome(): void {
    this.router.navigate(['/']);
  }
}
