import { LinkCard } from '../../../../shared/interfaces/LinkCard.interface';

const starredBoards: LinkCard[] = [
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    name: 'Personal Tasks',
    path: '/boards/personal-tasks',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Personal task management board',
  },
  {
    id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    name: 'Project Alpha',
    path: '/boards/project-alpha',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Main project development board',
  },
  {
    id: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
    name: 'Weekly Planning',
    path: '/boards/weekly-planning',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Weekly team planning and meetings',
  },
];

const recentBoards: LinkCard[] = [
  {
    id: 'd4e5f6a7-b8c9-0123-def1-234567890123',
    name: 'Design System',
    path: '/boards/design-system',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Design system and UI components',
  },
  {
    id: 'e5f6a7b8-c9d0-1234-ef12-345678901234',
    name: 'Marketing Campaign',
    path: '/boards/marketing',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Q4 Marketing campaign planning',
  },
  {
    id: 'f6a7b8c9-d0e1-2345-f123-456789012345',
    name: 'Bug Tracking',
    path: '/boards/bugs',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Bug tracking and issue management',
  },
];

const workspaceBoards: LinkCard[] = [
  {
    id: 'a7b8c9d0-e1f2-3456-7890-123456789abc',
    name: 'Team Workspace',
    path: '/workspace/team',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Main team workspace',
  },
  {
    id: 'b8c9d0e1-f2a3-4567-8901-23456789abcd',
    name: 'Development',
    path: '/workspace/development',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Development tasks and sprints',
  },
  {
    id: 'c9d0e1f2-a3b4-5678-9012-3456789abcde',
    name: 'Resources',
    path: '/workspace/resources',
    image:
      'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg',
    description: 'Team resources and documentation',
  },
];

export { starredBoards, recentBoards, workspaceBoards };
