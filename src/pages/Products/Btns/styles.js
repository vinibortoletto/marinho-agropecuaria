import styled from "styled-components";
import { FlexCenter, Breakpoint } from "../../../helpers/mixins";

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
    border-color: var(--d_green);
    background-color: var(--l_gold);

    &:nth-child(1) {
      margin-bottom: var(--m_mini);
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
