import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
    selector: 'app-feature-template',
    templateUrl: './feature-template.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterLink],
})
export default class FeatureTemplateComponent {
  features: FeatureItem[] = [
    {
      icon: '🚀',
      title: 'Custom Templates',
      description: 'Templates specifically designed for different project types',
    },
    {
      icon: '⚡',
      title: 'Automations',
      description: 'Pre-configured rules and automations to save time',
    },
    {
      icon: '🎯',
      title: 'Best Practices',
      description: 'Templates based on industry methodologies and best practices',
    },
    {
      icon: '👥',
      title: 'Team Collaboration',
      description: 'Templates for team collaboration and communication',
    },
  ];
}
