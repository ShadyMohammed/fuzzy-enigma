import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import { css, Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { sizes, theme, globalStyles } from '../styles';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import CategoryPost from '../components/CategoryPost';
import { ContentfulCategory, ContentfulPost } from '../graphql-types';

const categorySection = css`
  display: flex;
  flex-direction: column;
  background: #eee;
  padding: 5%;
  margin-bottom: 5%;

  @media screen and (min-width: ${sizes.SM_PHONE}px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

interface IProps {
  data: {
    contentfulCategory: ContentfulCategory;
  };
}

const CatPageCategorySection = ({
  category
}: {
  category: ContentfulCategory;
}) => {
  return (
    <div css={categorySection}>
      {category.post.map((_post: ContentfulPost) => (
        <CategoryPost
          post={_post}
          categorySlug={category.slug}
          key={_post.slug}
        />
      ))}
    </div>
  );
};

const CategoryPage: React.FunctionComponent<IProps> = ({ data }) => {
  const { contentfulCategory } = data;
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Layout>
        <Helmet>
          <title>{contentfulCategory.title}</title>
        </Helmet>
        <SEO
          title={contentfulCategory.title}
          // description={contentfulCategory.description}
        />
        <CatPageCategorySection category={contentfulCategory} />
      </Layout>
    </ThemeProvider>
  );
};

export const query = graphql`
  query CategoryQuery($slug: String) {
    contentfulCategory(slug: { eq: $slug }) {
      title
      slug
      # description
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
`;

export default CategoryPage;
