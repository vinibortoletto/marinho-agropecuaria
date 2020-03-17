import styled from "styled-components";
import { FlexCenter, Breakpoint } from "../../../../helpers/mixins";

export const Container = styled.div`
  ${FlexCenter()};
  justify-content: space-between;

  width: 100%;
  margin: 0 var(--m_sm);
  padding: 0.7rem 1.5rem;

  border-radius: var(--br_lg);
  font-size: var(--fz_sm);
  background: var(--d_gold);

  display: none;
  @media ${Breakpoint("900")} {
    display: flex;
  }
`;
