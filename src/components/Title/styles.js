import styled from "styled-components";
import { Breakpoint } from "../../helpers/mixins";

export const Title = styled.h1`
  margin-bottom: var(--m_lg);
  font-weight: bold;
  font-size: var(--fz_hg);
  color: var(--d_gold);

  @media ${Breakpoint("1200")} {
    font-size: var(--fz_xhg);
  }
`;
