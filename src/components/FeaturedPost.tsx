import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { ContentfulFeaturedPost } from '../graphql-types';

import Tag from './Tag';

const FeaturedPost: React.FunctionComponent = () => {
  return (
    <StaticQuery
      query={query}
      render={({ contentfulFeaturedPost: data }) => {
        const { post }: ContentfulFeaturedPost = data;
        return (
          <>
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
          </>
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
