import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { sizes } from '../../../styles';

const StyledNavMenu = styled.ul`
  grid-column: span 12;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background: ${props => props.theme.colors.secondary};
  list-style: none;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  @media screen and (min-width: ${sizes.PHONE}px) {
    grid-column: span 6;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    position: relative;
    z-index: 0;
    display: flex;
  }
`;

const MenuItem = styled.li`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${sizes.PHONE}px) {
    margin-bottom: 0;
  }
`;

const MenuItemLink = css`
  color: red;
`;

const menuItems = ['Home', 'Search', 'Store', 'Subscribe'];

interface IProps {
  isHamburgerMenuOpen: boolean;
}

const NavMenu: React.FunctionComponent<IProps> = ({ isHamburgerMenuOpen }) => {
  if (
    (typeof window !== 'undefined' && window.innerWidth >= sizes.PHONE) ||
    isHamburgerMenuOpen
  ) {
    return (
      <StyledNavMenu>
        {menuItems.map(item => (
          <MenuItem key={item}>
            <Link to="/" css={MenuItemLink}>
              {item}
            </Link>
          </MenuItem>
        ))}
      </StyledNavMenu>
    );
  }
  return null;
};

export default NavMenu;
