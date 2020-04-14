import styled from "styled-components";
import { FlexCenter, Breakpoint } from "../../../helpers/mixins";

export const Container = styled.section`
  margin-right: var(--m_lg);
  border-right: 1px solid var(--d_green_trans);

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

  .ranking div {
    display: inline;
  }

  display: none;
  @media ${Breakpoint("1200")} {
    display: block;
  }
`;
