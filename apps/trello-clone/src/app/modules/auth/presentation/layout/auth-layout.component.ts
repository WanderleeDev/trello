import { Component } from '@angular/core';
import { BannerComponent } from '../components/banner/banner.component';
import { BasicImageComponent } from '../../../../shared/presentation/components/basic-image/basic-image.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  template: `
    <section class="min-h-dvh bg-auth-bg pt-14 content-center pb-2">
      <app-banner />
      <div
        class="container-md flex flex-col justify-center items-center h-full px-10 py-8 relative z-10 shadow-[rgba(0,0,0,0.1)_0px_0px_10px]"
      >
        <h1 class="pb-8" title="trello">
          <app-basic-image
            src="assets/icons/logo-gradient-blue-trello.svg"
            alt="logo trello"
            [height]="1.5"
            [width]="8.8"
            [priority]
          />
        </h1>
        <router-outlet />
      </div>
    </section>
  `,
  standalone: true,
  imports: [BannerComponent, BasicImageComponent, RouterOutlet],
})
export default class AuthLayoutComponent {}
