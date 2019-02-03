import { css } from '@emotion/core';
import { calcFontSize, TypeScale } from './typography';

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 1em;
  }

  body {
    margin: 0;
    color: pink;
    font-family: 'Open Sans', sans-serif;
    margin: 0 auto;
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Lora', serif;
  }

  h1 {
    font-size: ${calcFontSize({ size: TypeScale.XXL })};
  }

  h2 {
    font-size: ${calcFontSize({ size: TypeScale.XL })};
  }

  h3 {
    font-size: ${calcFontSize({ size: TypeScale.LG })};
  }

  h4 {
    font-size: ${calcFontSize({ size: TypeScale.M })};
  }

  a {
    text-decoration: none;
  }
`;
