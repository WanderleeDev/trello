import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  standalone: true,
  imports: [NgOptimizedImage],
})
export class CardInfoComponent {
  image = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}
