import React from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { ContentfulPost } from '../../../graphql-types';

import { sizes } from '../../../styles';
import Tag from '../../Tag';

const StyledFeaturedPost = styled.div`
  grid-column: start / end;

  @media screen and (min-width: ${sizes.TABLET}px) {
    grid-column: start / span 6;
  }
`;

interface IProps {
  post: ContentfulPost;
}

const FeaturedPost: React.FunctionComponent<IProps> = ({ post }) => {
  return (
    <StyledFeaturedPost>
      <Image
        // @ts-ignore
        fluid={post.featuredImage.fluid}
        backgroundColor="blue"
        alt={post.title}
      />
      <Tag title={post.category.title} categorySlug={post.category.slug} />
      <h1>{post.title}</h1>
      <div>{post.description.childMarkdownRemark.excerpt}</div>
    </StyledFeaturedPost>
  );
};

export default FeaturedPost;
