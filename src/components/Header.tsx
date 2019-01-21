import { Link } from 'gatsby';
import React from 'react';

interface IProps {
  siteTitle?: string;
}

const Header: React.FunctionComponent<IProps> = ({ siteTitle = '' }) => {
  return (
    <div
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Header;
