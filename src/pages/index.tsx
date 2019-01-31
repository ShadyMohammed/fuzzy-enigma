import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { ContentfulCategoryEdge } from '../graphql-types';
import { globalStyles, theme } from '../styles';
import SEO from '../components/Seo';
import Layout from '../components/Layout';
import FeaturedSection from '../components/FeaturedSection';
import CategorySection from '../components/CategorySection';

const IndexPage: React.FunctionComponent<{}> = () => {
  return (
    <StaticQuery
      query={query}
      render={({ allContentfulCategory: data }) => {
        const { edges }: { edges: ContentfulCategoryEdge[] } = data;
        return (
          <ThemeProvider theme={theme}>
            <Global styles={globalStyles} />
            <Layout>
              <SEO
                title="Home"
                keywords={[`gatsby`, `application`, `react`]}
                description="Index for something I can't remember?!"
              />
              <FeaturedSection />
              {edges.map(edge => (
                <CategorySection key={edge.node.slug} category={edge} />
              ))}
            </Layout>
          </ThemeProvider>
        );
      }}
    />
  );
};

const query = graphql`
  query categories {
    allContentfulCategory {
      edges {
        node {
          title
          slug
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
          }
        }
      }
    }
  }
`;

export default IndexPage;
