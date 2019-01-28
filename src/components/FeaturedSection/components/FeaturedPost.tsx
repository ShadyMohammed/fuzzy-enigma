import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { ContentfulFeaturedPost } from '../../../graphql-types';

import { sizes } from '../../../styles';
import Tag from '../../Tag';

const StyledFeaturedPost = styled.div`
  grid-column: start / end;

  @media screen and (min-width: ${sizes.TABLET}px) {
    grid-column: start / span 6;
  }
`;

const FeaturedPost: React.FunctionComponent = () => {
  return (
    <StaticQuery
      query={query}
      render={({ contentfulFeaturedPost: data }) => {
        const { post }: ContentfulFeaturedPost = data;
        return (
          <StyledFeaturedPost>
            <Image
              // @ts-ignore
              fluid={post.featuredImage.fluid}
              backgroundColor="blue"
              alt={post.title}
            />
            <Tag
              title={post.category.title}
              categorySlug={post.category.slug}
            />
            <h1>{post.title}</h1>
            <div>{post.description.childMarkdownRemark.excerpt}</div>
          </StyledFeaturedPost>
        );
      }}
    />
  );
};

const query = graphql`
  query featuredPost {
    contentfulFeaturedPost {
      post {
        title
        description {
          childMarkdownRemark {
            excerpt(truncate: true)
          }
        }
        featuredImage {
          fluid {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        category {
          title
          slug
        }
      }
    }
  }
`;

export default FeaturedPost;
