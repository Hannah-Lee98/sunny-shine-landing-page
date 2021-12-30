import styled from 'styled-components';
import { DarkGreen, LightGreen } from '../../type/color';

export const FooterWrapper = styled.footer`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${LightGreen};
  color: ${DarkGreen};
  .footer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h3 {
    text-align: center;
    font-weight: 800;
    font-size: 30px;
  }
  .text-list,
  .icon-list {
    display: flex;
    justify-content: space-evenly;

    padding: 0;
  }

  .text-list {
    margin-bottom: 4rem;
    li {
      width: 100px;
      text-align: center;
      font-size: 0.8rem;
    }
  }

  .icon-list {
    margin: 0 2.5rem;
    li {
      width: 20px;
    }
    img {
      width: 20px;
      height: auto;
    }
  }
`;
