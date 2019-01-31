import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { css, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { ContentfulPost } from '../graphql-types';
import { theme, globalStyles } from '../styles';
import SEO from '../components/Seo';
import Layout from '../components/Layout';
import PostPageHeader from '../components/PostPageHeader';

const postPage = css`
  padding: 0 5%;
`;

interface IProps {
  data: {
    contentfulPost: ContentfulPost;
  };
}

const PostPage: React.FunctionComponent<IProps> = ({ data }) => {
  const { description, title, category, featuredImage } = data.contentfulPost;
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Layout>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <SEO title="POST" description="" />
        <PostPageHeader
          title={title}
          categoryTitle={category.title}
          categorySlug={category.slug}
          image={featuredImage.fluid}
        />
        <div
          css={postPage}
          dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html
          }}
        />
      </Layout>
    </ThemeProvider>
  );
};

export const query = graphql`
  query PostQuery($slug: String) {
    contentfulPost(slug: { eq: $slug }) {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      featuredImage {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      category {
        title
        slug
      }
    }
  }
`;

export default PostPage;
