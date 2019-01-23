import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const TagWrapper = styled.div`
  padding: 0.2rem 1rem;
`;

interface IProps {
  title: string;
  categorySlug: string;
}

const Tag: React.FunctionComponent<IProps> = ({ title, categorySlug }) => {
  return (
    <TagWrapper>
      <Link to={`/categories/${categorySlug}`}>{title}</Link>
    </TagWrapper>
  );
};

export default Tag;
