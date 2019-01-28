import { css } from '@emotion/core';
import { sizes } from './theme';

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    color: pink;
    font-family: 'Open Sans', sans-serif;
    /* max-width: 700px; */
    margin: 0 auto;

    /* @media screen and (min-width: ${sizes.TABLET}px) {
      max-width: 900px;
    }

    @media screen and (min-width: ${sizes.DESKTOP}px) {
      max-width: 1200px;
    } */
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Lora', serif;
  }

  a {
    text-decoration: none;
  }
`;
