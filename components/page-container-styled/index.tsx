import styled from 'styled-components';
import { DarkBlue } from '../../type/color';

export const PageContainer = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
`;

export const EmptyPageContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 90vh;
  background: ${DarkBlue};
  .content {
    font-size: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
