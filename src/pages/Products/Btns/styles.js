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

    &:nth-child(1) {
      margin-bottom: var(--m_mini);
    }

    i {
      margin-left: var(--m_sm);
    }
  }

  .btn_select_container {
    position: relative;
  }

  .options {
    width: 100%;
    padding: var(--m_lg) var(--m_sm) var(--m_sm) 2.2rem;

    position: absolute;
    top: 0;

    border: 1px solid var(--d_green);
    border-radius: 20px 20px var(--br_sm) var(--br_sm);

    font-size: var(--fz_sm);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    background: var(--l_gold);

    li {
      margin-bottom: var(--m_mini);

      cursor: pointer;
    }
  }

  @media ${Breakpoint("600")} {
    flex-direction: row;
    justify-content: flex-end;
  }

  @media ${Breakpoint("1200")} {
    .advanced_search {
      display: none;
    }
  }
`;
