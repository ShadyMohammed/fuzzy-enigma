import styled from '@emotion/styled';
import { sizes } from '../../../styles/theme';

const LogoWrapper = styled.div`
  max-height: 100px;
  max-width: 100px;
  grid-column: span 6;

  @media screen and (min-width: ${sizes.PHONE}px) {
    grid-column: span 2;
  }
`;

export default LogoWrapper;
