import React from 'react';
import Helmet from 'react-helmet';
import SEO from '../components/Seo';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { ContentfulPost } from '../graphql-types';

interface IProps {
  data: {
    contentfulPost: ContentfulPost;
  };
}

const PostPage: React.FunctionComponent<IProps> = ({ data }) => {
  const { description, title, slug } = data.contentfulPost;
  console.log(title);
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <SEO title="POST" description="" />
      <h1>{title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html
        }}
      />
    </Layout>
  );
};

export const query = graphql`
  query PostQuery($slug: String) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default PostPage;
