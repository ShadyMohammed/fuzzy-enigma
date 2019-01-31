import { ContentfulCategory, ContentfulCategoryEdge } from './graphql-types';

export interface IContentfulCategory extends ContentfulCategory {
  isEdge: false;
}

export interface IContentfulCategoryEdge extends ContentfulCategoryEdge {
  isEdge: true;
}
