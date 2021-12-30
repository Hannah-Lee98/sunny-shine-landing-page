import styled from 'styled-components';

export const Section1Wrapper = styled.section`
  //background: url('/public/images/desktop/image-header.jpg');
  background: indianred;
  width: 100%;
  position: relative;
  justify-content: center;
  display: flex;
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
      font-size: 60px;
      font-family: Fraunces;
    }
  }
  .arrow-icon {
    display: flex;
    justify-content: center;
  }
`;
