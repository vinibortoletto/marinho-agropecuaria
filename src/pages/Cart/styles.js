import styled from "styled-components";
import { Breakpoint } from "../../helpers/mixins";

export const Container = styled.div`
  @media ${Breakpoint("1000")} {
    .content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: var(--m_md);
    }
  }
`;
