export type Category =
  | 'popular'
  | 'business'
  | 'design'
  | 'education'
  | 'engineering'
  | 'marketing'
  | 'project-management'
  | 'remote';

export type FeatureCategoriesType = Exclude<Category, 'popular'>;

export type AuthorType = 'Trello Team' | 'Trello Engineering Team' | 'Atlassian' | string;
