import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

import { ContentfulPost } from '../../graphql-types';
import Tag from '../Tag';
import { sizes } from '../../styles';

const categoryPost = css`
  margin-bottom: 5%;

  @media screen and (min-width: ${sizes.SM_PHONE}px) {
    max-width: 45%;
  }

  @media screen and (min-width: ${sizes.PHONE}px) {
    max-width: 47.5%;
  }
  
  @media screen and(min-width: ${sizes.TABLET}px) {
    max-width: 42.5%
  }

  @media screen and (min-width: ${sizes.DESKTOP}px) {
    max-width: 22.5%;
  }
`;

const postImageWrapper = css`
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
