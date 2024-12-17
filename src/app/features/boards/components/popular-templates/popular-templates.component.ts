import { Component, signal } from '@angular/core';

interface Template {
  id: string;
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-popular-templates',
  templateUrl: './popular-templates.component.html',
})
export class PopularTemplatesComponent {
  templates = signal<Template[]>([
    {
      id: '1',
      name: 'Basic Board',
      imageUrl: '/assets/images/templates/basic-board.jpg',
    },
    {
      id: '2',
      name: 'Kanban Template',
      imageUrl: '/assets/images/templates/kanban.jpg',
    },
    {
      id: '3',
      name: 'Daily Task Management',
      imageUrl: '/assets/images/templates/daily-task.jpg',
    },
    {
      id: '4',
      name: 'Remote Team Hub',
      imageUrl: '/assets/images/templates/remote-team.jpg',
    },
  ]);
}
