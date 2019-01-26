import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Nav from './Nav';

interface IProps {}

const Layout: React.FunctionComponent<IProps> = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={() => (
        <div>
          <Nav />
          {children}
        </div>
      )}
    />
  );
};

export default Layout;
