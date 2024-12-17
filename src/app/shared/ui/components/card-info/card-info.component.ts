import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent {
  image = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}
