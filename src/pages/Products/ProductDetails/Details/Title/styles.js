import styled from "styled-components";
import { Breakpoint } from "../../../../../helpers/mixins";

export const Container = styled.div`
  h1 {
    text-transform: capitalize;
    font-weight: bold;
    font-size: var(--fz_md);
    @media ${Breakpoint("600")} {
      font-size: var(--fz_lg);
    }
  }

  h6 {
    font-size: var(--fz_mini);
  }

  margin-bottom: var(--m_mini);
`;
