import styled from "styled-components";
import { Breakpoint } from "../../helpers/mixins";

export const Container = styled.div`
  margin: 0 -5vw var(--m_lg) -5vw;

  /* Slider */
  .flickity-button,
  .dot {
    display: none;
  }

  @media ${Breakpoint("1200")} {
    margin-right: -10vw;
    margin-left: -10vw;
  }
  @media ${Breakpoint("2000")} {
    margin-right: -20vw;
    margin-left: -20vw;
  }
`;
