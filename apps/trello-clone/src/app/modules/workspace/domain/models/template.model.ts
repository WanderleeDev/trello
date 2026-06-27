import type { AuthorType, Category, FeatureCategoriesType } from '../types/template.types';

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

export type CardInfo = Exclude<Template, 'category'>;
