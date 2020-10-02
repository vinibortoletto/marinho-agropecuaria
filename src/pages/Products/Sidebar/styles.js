import styled from 'styled-components';
import { FlexCenter, Breakpoint } from '../../../helpers/mixins';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 4rem;
  padding: 1rem var(--sp_sm);

  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

  background: var(--l_gold);

  #close_btn {
    float: right;
    font-size: 1.5rem;
    color: var(--l_green);
  }

  display: none;

  &.show {
    display: block;
  }

  .categories,
  .prices,
  .rating {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  .categories,
  .prices {
    margin-bottom: var(--m_lg);
  }

  h1 {
    font-weight: bold;
    margin-bottom: var(--m_sm);
  }

  li {
    ${FlexCenter};
    justify-content: flex-start;
    margin-bottom: var(--m_mini);
  }

  span {
    color: grey;
    font-size: var(--fz_mini);
    margin-left: 0.2rem;
  }

  .rating div {
    display: inline;
  }

  @media ${Breakpoint('900')} {
    padding-top: 5rem;
  }

  @media ${Breakpoint('1200')} {
    width: auto;
    height: auto;
    display: block;

    margin-top: 0;
    margin-right: var(--m_lg);
    border-right: 1px solid var(--d_green_trans);
    padding: 0;

    position: static;
    background: var(--l_gold);

    #close_btn {
      display: none;
    }

    .categories,
    .prices,
    .rating {
      ul {
        display: block;
      }
    }
  }
`;
