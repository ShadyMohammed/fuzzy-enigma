import styled from '@emotion/styled';
import TextInput from '../../TextInput';
import { sizes } from '../../../styles';

const StyledNavSearch = styled.div`
  grid-column: span 12;
  display: none;

  @media screen and (min-width: ${sizes.TABLET}px) {
    grid-column: 10 / auto;
    display: block;
  }
`;

import React from 'react';

const NavSearch: React.FunctionComponent<{}> = () => {
  return (
    <StyledNavSearch>
      <TextInput placeholder="Search..." />
    </StyledNavSearch>
  );
};

export default NavSearch;
