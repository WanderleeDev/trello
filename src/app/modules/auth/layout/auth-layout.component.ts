import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  template: `
    <section class="min-h-dvh bg-[#fafbfc] pt-14 content-center pb-2">
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
})
export class AuthLayoutComponent {}
