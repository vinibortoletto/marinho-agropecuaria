import styled from "styled-components";
import { Breakpoint } from "../../../../helpers/mixins";

export const Container = styled.div`
  padding: 0 var(--sp_sm);
  position: relative;

  @media ${Breakpoint("800")} {
    padding: 0;
  }

  @media ${Breakpoint("1100")} {
    .price_and_btn_wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;
