import React, { Component } from 'react';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';
import Image from 'gatsby-image';
import Helmet from 'react-helmet';

import { sizes } from '../../styles';
import LogoWrapper from './components/LogoWrapper';
import NavSearch from './components/NavSearch';
import NavMenu from './components/NavMenu';

const StyledNav = styled.div`
  border-bottom: 1px solid;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const MenuIcon = styled.span`
  border: 1px solid ${props => props.theme.colors.primary};
  z-index: 1;
  @media screen and (min-width: ${sizes.PHONE}px) {
    display: none;
  }
`;

const lockBody = css`
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
`;

const releaseBody = css`
  overflow: auto;
  -webkit-overflow-scrolling: auto;
`;

interface IState {
  isHamburgerMenuOpen: boolean;
}

class Nav extends Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      isHamburgerMenuOpen: false
    };
  }

  toggleHamburgerMenuDisplay = () => {
    this.setState(prevState => ({
      isHamburgerMenuOpen: !prevState.isHamburgerMenuOpen
    }));
  };

  render() {
    const { isHamburgerMenuOpen } = this.state;
    return (
      <>
        <Helmet>
          <body class={isHamburgerMenuOpen ? 'asd' : 'asdasd'} />
        </Helmet>
        <StyledNav>
          <LogoWrapper>
            <span>Logo</span>
          </LogoWrapper>
          <NavMenu isHamburgerMenuOpen={isHamburgerMenuOpen} />
          <NavSearch />
          <MenuIcon onClick={this.toggleHamburgerMenuDisplay}>
            {isHamburgerMenuOpen ? 'x' : 'Menu'}
          </MenuIcon>
        </StyledNav>
      </>
    );
  }
}

export default Nav;
