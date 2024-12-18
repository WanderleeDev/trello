import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dots-dropdown',
  template: `
    <app-dropdown>
      <app-grid-dots-icon [size]="20" />

      <div ngProjectAs="dropdown">
        <strong>Your apps</strong>
        <app-link-btn href="#">
          <app-atlasian-icon [size]="24" ngProjectAs="left" class="dropdown-icon" />
          Atlasian
        </app-link-btn>
        <app-link-btn href="#">
          <app-trello-clr-icon [size]="24" ngProjectAs="left" class="dropdown-icon" />
          Trello
        </app-link-btn>
      </div>
    </app-dropdown>
  `,
  styles: `
    .dropdown-icon {
      background-color: #0152cc;
      padding: 0.2rem;
      border-radius: 0.4rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DotsDropdownComponent {}
