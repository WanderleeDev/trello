import { LinkCard } from '../../shared/interfaces/LinkCard.interface';

const starredBoards: LinkCard[] = [
  {
    name: 'Personal Tasks',
    path: '/boards/personal-tasks',
    image: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Personal task management board',
  },
  {
    name: 'Project Alpha',
    path: '/boards/project-alpha',
    image: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Main project development board',
  },
  {
    name: 'Weekly Planning',
    path: '/boards/weekly-planning',
    image: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Weekly team planning and meetings',
  },
];

const recentBoards: LinkCard[] = [
  {
    name: 'Design System',
    path: '/boards/design-system',
    image: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Design system and UI components',
  },
  {
    name: 'Marketing Campaign',
    path: '/boards/marketing',
    image: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Q4 Marketing campaign planning',
  },
  {
    name: 'Bug Tracking',
    path: '/boards/bugs',
    image: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Bug tracking and issue management',
  },
];

const workspaceBoards: LinkCard[] = [
  {
    name: 'Team Workspace',
    path: '/boards/team',
    image: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Main team workspace',
  },
  {
    name: 'Development',
    path: '/boards/development',
    image: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Development tasks and sprints',
  },
  {
    name: 'Resources',
    path: '/boards/resources',
    image: 'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Team resources and documentation',
  },
];

export { starredBoards, recentBoards, workspaceBoards };
