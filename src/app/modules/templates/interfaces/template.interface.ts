export interface TemplateCategory {
  name: string;
  templates: Template[];
  category: Category;
}

export interface Template {
  title: string;
  author: Author;
  description: string;
  views: number;
  copies: number;
  category: Category;
  thumbnail: string;
}

export interface Author {
  name: string;
  image: AuthorType;
}

export interface FeatureCategories extends Record<FeatureCategoriesType, string> {
  [key: string]: string;
}

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

export type CardInfo = Exclude<Template, 'category'>;
