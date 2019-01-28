import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const TagWrapper = styled.div`
  padding: 0.2rem 0;
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
