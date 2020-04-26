import styled from "styled-components";
import { Breakpoint } from "../../../../../helpers/mixins";

export const Container = styled.div`
  margin-bottom: var(--m_sm);
  text-align: right;

  h3 {
    font-weight: bold;
    font-size: var(--fz_lg);
  }

  p {
    font-size: var(--fz_mini);
  }

  span {
    font-size: var(--fz_mini);
    color: var(--l_green);

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media ${Breakpoint("1100")} {
    margin-bottom: 0;
    text-align: left;
  }
`;
