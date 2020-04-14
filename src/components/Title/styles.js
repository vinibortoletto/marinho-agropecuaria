import styled from "styled-components";
import { Breakpoint } from "../../helpers/mixins";

export const Title = styled.h1`
  margin: var(--m_lg) 0;
  font-weight: bold;
  font-size: var(--fz_hg);
  color: var(--d_gold);
  font-family: var(--ff_special);

  @media ${Breakpoint("1200")} {
    font-size: var(--fz_xhg);
  }
`;
