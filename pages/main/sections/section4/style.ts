import styled from 'styled-components';

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
`;
