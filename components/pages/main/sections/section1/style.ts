import styled from 'styled-components';
import { screenSize } from '../../../../../type/general';

export const Section1Wrapper = styled.section`
  //background: url('/public/images/desktop/image-header.jpg');
  background: #3c7c92;
  width: 100%;
  position: relative;
  justify-content: center;
  display: flex;
  aspect-ratio: 1.8;
  .banner-img {
    width: 100%;
    height: auto;
  }
  .content-section {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    &__title {
      text-transform: uppercase;
      color: white;
      text-align: center;
      font-size: clamp(30px, 5vw, 60px);
      font-family: Fraunces;
    }
  }
  .arrow-icon {
    display: flex;
    justify-content: center;
    svg {
      height: auto;
    }
  }

  @media only screen and ${screenSize.medium} {
    .content-section {
      position: absolute;
      top: 50%;
    }
    .arrow-icon {
      svg {
        width: 20px;
      }
    }
  }
  @media only screen and ${screenSize.small} {
    .arrow-icon {
      svg {
        width: 10px;
      }
    }
  }
`;
