import styled from 'styled-components';

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
`;

export const SectionItemHasContentOnlyWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: rgb(254 251 247);
  .section-container {
    width: 450px;
    font-family: Fraunces;
    color: rgb(41 48 61);
    > h2 {
      font-size: 50px;
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
      font-size: 30px;
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
  .section-container {
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 300px;
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
