import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../GlobalStyles';
import SEO from '../components/Seo';
import Layout from '../components/Layout';
import FeaturedPost from '../components/FeaturedPost';

interface IProps {}

const theme = {
  primaryColor: '#000'
};

const IndexPage: React.FunctionComponent<IProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout>
          <SEO
            title="Home"
            keywords={[`gatsby`, `application`, `react`]}
            description="Index for something I can't remember?!"
          />
          <FeaturedPost />
        </Layout>
      </>
    </ThemeProvider>
  );
};

export default IndexPage;
