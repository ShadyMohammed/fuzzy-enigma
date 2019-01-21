import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import { ContentfulFeaturedPost } from '../graphql-types';

interface props {
  isRed?: boolean;
}

const Header = styled('h1')<props>`
  color: red;
  background: ${p => (p.isRed ? 'red' : 'green')};
`;

const FeaturedPost: React.FunctionComponent = () => {
  return (
    <StaticQuery
      query={query}
      render={({ contentfulFeaturedPost: data }) => {
        const { post }: ContentfulFeaturedPost = data;
        return (
          <>
            <Header>{post.title}</Header>
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
      }
    }
  }
`;

export default FeaturedPost;
