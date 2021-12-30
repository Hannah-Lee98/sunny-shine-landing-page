import styled from 'styled-components';
import { PrimaryFontWeight } from '../../type/color';

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  background: transparent;
  align-content: space-between;
  position: absolute;
  width: 100%;
  padding: 0.5rem 2rem;
  z-index: 100;
  .left-nav {
    flex: 1;
    > ul {
      padding: 0;
    }
    a {
      font-size: 24px;
      color: #fff;
      font-weight: 800;
    }
  }
  .right-nav {
    > ul {
      display: flex;
    }
    li {
      width: 100px;
      text-align: center;
      color: white;
      padding: 0.5rem;
      a {
        color: inherit;
      }
    }
  }
  li.active {
    background: white;
    color: black;
    font-size: 20px;
    border-radius: 10px;
    font-family: Fraunces;
  }
`;
