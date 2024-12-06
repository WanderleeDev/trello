import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <header class="board-header">
      <app-nav />
      <!-- <app-banner /> -->
    </header>

    <main class="board-body">
      <app-sidebar />
      <div class="board-projection">
        <router-outlet />
      </div>
    </main>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
