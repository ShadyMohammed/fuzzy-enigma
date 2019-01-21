import React from 'react';
import SEO from '../components/Seo';
import Layout from '../components/Layout';
import FeaturedPost from '../components/FeaturedPost';
import { graphql } from 'gatsby';
interface IProps {}

const IndexPage: React.FunctionComponent<IProps> = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `application`, `react`]}
        description="Index for something I can't remember?!"
      />
      <FeaturedPost />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    </Layout>
  );
};

export default IndexPage;
