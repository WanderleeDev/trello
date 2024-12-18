import { Component, input } from '@angular/core';

interface Template {
  id: string;
  name: string;
  imageUrl: string;
  description?: string;
}

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.scss'],
})
export class TemplateCardComponent {
  template = input.required<Template>();
}
