import styled from 'styled-components';
import { screenSize } from '../../../../../type/general';

export const Section4Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  .grid-item {
    display: flex;
  }
  img {
    width: 100%;
    height: auto;
  }
  @media only screen and ${screenSize.medium} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and ${screenSize.small} {
    grid-template-columns: 1fr;
  }
`;
