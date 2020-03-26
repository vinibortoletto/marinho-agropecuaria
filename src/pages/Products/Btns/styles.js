import styled from "styled-components";
import { FlexCenter, Breakpoint } from "../../../helpers/mixins";

export const Container = styled.section`
  ${FlexCenter};
  flex-direction: column;
  margin-bottom: var(--m_sm);

  button {
    width: 12rem;
    border-color: var(--d_green);
    color: var(--d_green);
    padding: 0;
    position: relative;
    z-index: 1;
    background: var(--l_gold);

    &:nth-child(1) {
      margin-bottom: var(--m_mini);
    }

    i {
      margin-left: var(--m_sm);
      transition: 0.2s ease-out;

      &.toggle {
        transform: scaleY(-1);
      }
    }
  }

  .btn_select_container {
    position: relative;
  }

  .sort_options {
    width: 100%;
    position: absolute;
    z-index: -1;

    border-radius: var(--br_sm);

    font-size: var(--fz_sm);
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);

    background: var(--l_gold);

    opacity: 0;
    transform: translateY(-30%);
    pointer-events: none;
    transition: 0.2s ease-out;

    &.toggle {
      opacity: 1;
      transform: translateY(0%);
      pointer-events: all;
      z-index: 1;
    }

    li {
      cursor: pointer;
      padding: var(--m_mini);
      text-align: center;

      &:hover {
        background: var(--d_gold);
      }
    }
  }

  @media ${Breakpoint("600")} {
    flex-direction: row;
    justify-content: flex-end;

    .bnt_advanced_search {
      margin-right: var(--m_sm);
    }
  }

  @media ${Breakpoint("1200")} {
    .bnt_advanced_search {
      display: none;
    }
  }
`;
