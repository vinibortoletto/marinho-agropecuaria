import styled from 'styled-components';
import { FlexCenter, Breakpoint } from '../../../helpers/mixins';

export const Container = styled.section`
  ${FlexCenter};
  flex-direction: column;
  margin-bottom: var(--m_sm);

  button {
    width: 12rem;
    padding: 0;

    position: relative;
    z-index: 1;

    color: var(--d_green);
    border-color: 1px solid var(--d_green);
    background-color: var(--l_gold);

    &:nth-child(1) {
      margin-bottom: var(--m_mini);
    }
  }

  @media ${Breakpoint('600')} {
    flex-direction: row;
    justify-content: flex-end;

    .bnt_advanced_search {
      margin-right: var(--m_sm);
    }
  }

  @media ${Breakpoint('1200')} {
    .bnt_advanced_search {
      display: none;
    }
  }

  .select_container {
    position: relative;

    &::after {
      content: '>';
      position: absolute;
      top: 50%;
      font-weight: bold;
      right: 7%;
      transform: translateY(-62%) rotate(90deg) scaleX(0.5) scale(1.5);
    }
  }

  select {
    background: var(--l_gold);
    border: 1px solid var(--d_green);
    border-radius: 10rem;
    color: var(--d_green);
    padding: 0 var(--m_md);
    height: 2.5rem;
    margin-bottom: var(--m_mini);
    font-size: var(--fz_sm);
    cursor: pointer;

    option {
      background: var(--l_gold);
    }
  }
`;
