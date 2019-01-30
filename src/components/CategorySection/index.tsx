import React from 'react';
import { css } from '@emotion/core';

import CategoryPost from './CategoryPost';
import { ContentfulCategoryEdge } from '../../graphql-types';
import { sizes } from '../../styles';

const categorySection = css`
  display: flex;
  flex-direction: column;
  background: #eee;
  padding: 5%;
  margin-bottom: 5%;

  @media screen and (min-width: ${sizes.SM_PHONE}px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

interface IProps {
  category: ContentfulCategoryEdge;
}

const CategorySection: React.FunctionComponent<IProps> = ({ category }) => {
  return (
    <div css={categorySection}>
      {category.node.post.map(_post => (
        <CategoryPost post={_post} key={_post.slug} />
      ))}
    </div>
  );
};

export default CategorySection;
