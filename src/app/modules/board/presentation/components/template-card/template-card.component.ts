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
})
export class TemplateCardComponent {
  template = input.required<Template>();
}
