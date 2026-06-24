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

    <main class="flex justify-center items-start w-[min(100%,70rem)] mx-auto mt-10">
      <app-sidebar />
      <div class="flex-1 h-full">
        <router-outlet />
      </div>
    </main>
  `,
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
