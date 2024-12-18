import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <section class="my-20 flex flex-col items-center justify-center gap-6 max-w-2xl px-4 mx-auto">
      <h2 class="font-extrabold text-3xl">Page not found</h2>
      <p class="text-center text-lg">
        This page may be private. If someone gave you this link, you may need to be a board or
        Workspace member to access it.
      </p>
      <footer>
        <a class="text-[#0c66e4] hover:underline mt-4" routerLink="/home">Back to home</a>
      </footer>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {}
