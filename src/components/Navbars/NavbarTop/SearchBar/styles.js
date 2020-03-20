import styled from "styled-components";
import { FlexCenter, Breakpoint } from "../../../../helpers/mixins";

export const Container = styled.div`
  width: 100%;
  background: var(--d_gold);
  border-radius: var(--br_lg);
  margin: 0 var(--m_sm);
  ${FlexCenter()};
  padding: 0.7rem 1.5rem;
  font-size: var(--fz_sm);

  input {
    width: 100%;
  }

  display: none;
  @media ${Breakpoint("900")} {
    display: flex;
  }
`;
