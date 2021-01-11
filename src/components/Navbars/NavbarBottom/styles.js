import styled from 'styled-components';
import { Breakpoint, FlexCenter, Size } from '../../../helpers/mixins';

export const Navbar = styled.nav`
  ${Size('100%', '5rem')};

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;

  background-color: var(--d_green);
  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.3);

  a,
  button {
    height: 100%;
    width: 100%;
  }

  button {
    color: var(--l_gold);
    transition: 0.2s ease-in-out;

    &:hover {
      background: var(--hover);
    }
  }

  #cart_btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cart_icon_container {
    position: relative;
  }

  .counter {
    width: 1.3rem;
    height: 1.3rem;
    font-size: var(--fz_sm);
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: -10px;
    right: 0;

    border-radius: var(--br_sm);
    background: var(--d_gold);
    color: var(--d_green);
  }

  ul {
    height: 100%;
    max-width: 30rem;
    margin: auto;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    li {
      ${Size('100%')};
      ${FlexCenter};
      flex-direction: column;

      text-align: center;

      border-right: 1px solid rgba(254, 245, 229, 0.2);
      &:nth-last-child(1) {
        border: none;
      }
    }

    i {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  .box_shadow {
    width: 100%;
    height: calc(100% - 5rem);
    background: rgba(0, 0, 0, 0.3);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    opacity: 0;
    pointer-events: none;
    transition: 0.2s ease-out;

    &.show {
      opacity: 1;
      pointer-events: all;
    }
  }

  @media ${Breakpoint('900')} {
    display: none;
  }
`;
