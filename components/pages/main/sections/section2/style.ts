import styled from 'styled-components';
import { screenSize } from '../../../../../type/general';

export const Section2Wrapper = styled.section`
  display: grid;
  gap: 0;
  grid-template-columns: 1fr 1fr;

  .grid-item {
    margin: 0;
    padding: 0;
    display: flex;
    > img {
      width: 100%;
      height: auto;
    }
  }
  @media only screen and ${screenSize.medium} {
    grid-template-columns: 1fr;
  }
`;

export const SectionItemHasContentOnlyWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: rgb(254 251 247);
  aspect-ratio: 1.2;
  .section-container {
    margin: 3rem;
    width: min(450px, 75%);
    font-family: Fraunces;
    color: rgb(41 48 61);
    > h2 {
      font-size: clamp(20px, 3vw, 50px);
      font-weight: 700;
      font-family: inherit;
      color: inherit;
    }
    > p {
      margin-bottom: 2rem;
      font-family: inherit;
      color: rgb(160 159 164);
    }
    > a {
      font-size: clamp(16px, 3vw, 35px);
      font-family: inherit;
      color: inherit;
      font-weight: 700;
      text-decoration: underline 5px solid pink;
      transition: color 0.3s, text-decoration-color 0.3s;

      :hover,
      :focus {
        color: black;
        text-decoration-color: lightcoral;
      }
    }
  }
`;

export const SectionItemHasContentAndPictureWrapper = styled.section`
  display: flex;
  position: relative;
  aspect-ratio: 1.2;
  flex: 1;
  > img {
    width: 100%;
    height: auto;
  }
  .section-container {
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: min(300px, 75%);
    font-family: Fraunces;
    > h2 {
      font-size: 30px;
      font-family: inherit;
      opacity: 0.6;
    }
    > p {
      //margin-bottom: 2rem;
      font-family: inherit;
      opacity: 0.6;
    }
  }
`;
