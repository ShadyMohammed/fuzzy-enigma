import React from 'react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { globalStyles, theme } from '../styles';
import SEO from '../components/Seo';
import Layout from '../components/Layout';
import FeaturedSection from '../components/FeaturedSection';

const IndexPage: React.FunctionComponent<{}> = () => {
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
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
