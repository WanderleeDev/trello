import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-banner-board',
  template: `
    <img
      class="z-1 select-none pointer-events-none object-cover"
      [ngSrc]="image()"
      alt="boards-banner"
      fill
      priority
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerBoardComponent {
  readonly image = input<string>(
    'https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/960x960/c34772fa944b817aabb070efab6bb246/shutterstock_261269042.jpg',
  );
}
