import React from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { ContentfulPost } from '../../../graphql-types';

import { sizes } from '../../../styles';
import Tag from '../../Tag';

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${sizes.TABLET}px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: ${sizes.TABLET}px) {
    width: 33.3333%;
    margin-right: 16.6666%;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const CardBody = styled.div`
  width: 100%;

  @media screen and (min-width: ${sizes.TABLET}px) {
    width: 50%;
  }
`;

interface IProps {
  post: ContentfulPost;
}

const PostCard: React.FunctionComponent<IProps> = ({ post }) => {
  return (
    <StyledPost>
      <ImageWrapper>
        {post.featuredImage && (
          <StyledImage
            // @ts-ignore
            fluid={post.featuredImage.fluid}
            alt={post.title}
          />
        )}
      </ImageWrapper>
      <CardBody>
        <Tag title={post.category.title} categorySlug={post.category.slug} />
        <h1>{post.title}</h1>
        <div>{post.description.childMarkdownRemark.excerpt}</div>
      </CardBody>
    </StyledPost>
  );
};

export default PostCard;
