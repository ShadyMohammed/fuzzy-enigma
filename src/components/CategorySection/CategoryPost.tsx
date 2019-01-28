import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

import { ContentfulPost } from '../../graphql-types';
import Tag from '../Tag';
import { sizes } from '../../styles';

const categoryPost = css`
  grid-column: span 1;
  margin-bottom: 5%;

  @media screen and (min-width: ${sizes.SM_PHONE}px) {
    grid-column: span 1;
  }
`;

const postImageWrapper = css`
  /* width: 100%;
  height: 100%; */
  margin-bottom: 0.5rem;
`;

const postImage = css`
  width: 100%;
  height: 100%;
`;

const postBody = css``;

const postTitle = css`
  margin: 0.75rem 0;
`;

const postDescription = css``;

interface IProps {
  post: ContentfulPost;
}

const CategoryPost: React.FunctionComponent<IProps> = ({ post }) => {
  return (
    <div css={categoryPost}>
      <div css={postImageWrapper}>
        <Image fluid={post.featuredImage.fluid} />
      </div>
      <div css={postBody}>
        <Tag title="cat" categorySlug="asdads" />
        <h2 css={postTitle}>{post.title}</h2>
        <p css={postDescription}>
          {post.description.childMarkdownRemark.excerpt}
        </p>
      </div>
    </div>
  );
};

export default CategoryPost;
