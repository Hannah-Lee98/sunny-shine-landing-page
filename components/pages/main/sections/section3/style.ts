import styled from 'styled-components';
import { screenSize } from '../../../../../type/general';

export const Section3Wrapper = styled.section`
  background: #f3f3f3;
  .section-container {
    padding: 4rem 0;
  }
  .head-section {
    font-family: Fraunces;
    font-size: 25px;
    letter-spacing: 5px;
    font-weight: 800;
    color: rgb(167 167 167);
    text-align: center;
    margin: 0;
    text-transform: uppercase;
  }
  .body-section {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  @media only screen and ${screenSize.medium} {
    .body-section {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ClientFeedbackSectionWrapper = styled.section`
  max-width: 350px;
  .top-section {
    .avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      overflow: hidden;
      margin: 4rem auto;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .middle-section {
    margin: 4rem auto;
    p {
      text-align: center;
      opacity: 0.8;
    }
  }
  .bottom-section {
    text-align: center;
    &__username {
      font-weight: 800;
      margin-bottom: 1rem;
    }
    &__job-title {
      opacity: 0.5;
    }
  }
`;
