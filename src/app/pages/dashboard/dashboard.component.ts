import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavComponent } from '../../shared/ui/components/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    template: `
    <header class="board-header">
      <app-nav />
      <app-banner />
    </header>

    <main class="board-body">
      <app-sidebar />
      <div class="board-projection">
        <router-outlet />
      </div>
    </main>
  `,
    styleUrls: ['./dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NavComponent,
        BannerComponent,
        SidebarComponent,
        RouterOutlet,
    ],
})
export class DashboardComponent {}
