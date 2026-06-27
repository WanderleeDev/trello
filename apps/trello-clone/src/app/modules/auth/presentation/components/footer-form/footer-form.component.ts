import { Component } from '@angular/core';
import { BasicImageComponent } from '../../../../../shared/presentation/components/basic-image/basic-image.component';

@Component({
  selector: 'app-footer-form',
  template: `
    <footer class="flex flex-col items-center text-center text-[.7rem] gap-1 pt-8 px-2 ">
      <app-basic-image
        src="assets/icons/atlassian.svg"
        alt="logo atlassian"
        [height]="1.5"
        [width]="8.8"
      />

      <p>
        One account for Trello, Jira, Confluence and
        <a class="text-blue-500 hover:underline" href="#">more</a>.
      </p>

      <ng-content />
    </footer>
  `,
  standalone: true,
  imports: [BasicImageComponent],
})
export class FooterFormComponent {}
