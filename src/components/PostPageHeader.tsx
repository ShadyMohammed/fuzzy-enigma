import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';

import Tag from './Tag';
import { ContentfulFluid } from '../graphql-types';
import { sizes } from '../styles';

const postPageHeader = css`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${sizes.TABLET}px) {
    flex-direction: row;
  }
`;

const headerImageWrapper = css`
  width: 100%;
  min-height: 50vh;
  position: relative;

  @media screen and (min-width: ${sizes.TABLET}px) {
    width: 60%;
  }
`;

const headerImage = css`
  position: absolute !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const headerText = css``;
const styledTitle = css``;

interface IProps {
  title: string;
  image: ContentfulFluid;
  categoryTitle: string;
  categorySlug: string;
}

const PostPageHeader: React.FunctionComponent<IProps> = ({
  title,
  categorySlug,
  categoryTitle,
  image
}) => {
  return (
    <div css={postPageHeader}>
      <div css={headerImageWrapper}>
        <Image fluid={image} alt={title} css={headerImage} />
      </div>
      <div css={headerText}>
        <Tag title={categoryTitle} categorySlug={categorySlug} />
        <h1 css={styledTitle}>{title}</h1>
      </div>
    </div>
  );
};

export default PostPageHeader;
