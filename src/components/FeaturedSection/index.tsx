import React from 'react';
import styled from '@emotion/styled';
import { graphql, StaticQuery } from 'gatsby';

import { sizes } from '../../styles';
import FeaturedPost from './components/FeaturedPost';
import PostCard from './components/PostCard';
import { ContentfulPostEdge } from '../../graphql-types';

const StyledFeaturedSection = styled.div`
  display: grid;
  grid-template-columns:
    3% [start] repeat(6, 1fr) 3% [start-recent] repeat(6, 1fr)
    [end] 3%;
`;

const RecentPosts = styled.div`
  grid-column: start / end;

  @media screen and (min-width: ${sizes.PHONE}px) {
    grid-column: start-recent / end;
  }
`;

const FeaturedSection: React.FunctionComponent<{}> = () => {
  return (
    <StaticQuery
      query={query}
      render={({ posts, featuredPost }) => {
        const { edges }: { edges: ContentfulPostEdge[] } = posts;
        return (
          <StyledFeaturedSection>
            <FeaturedPost post={featuredPost.post} />
            <RecentPosts>
              {edges.map(({ node }) => (
                <PostCard post={node} key={node.slug} />
              ))}
            </RecentPosts>
          </StyledFeaturedSection>
        );
      }}
    />
  );
};

const query = graphql`
  {
    posts: allContentfulPost(
      limit: 3
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          featuredImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          category {
            title
            slug
          }
          createdAt
          title
          slug
          description {
            childMarkdownRemark {
              excerpt(truncate: true)
            }
          }
        }
      }
    }

    featuredPost: contentfulFeaturedPost {
      post {
        title
        slug
        description {
          childMarkdownRemark {
            excerpt
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

export default FeaturedSection;
