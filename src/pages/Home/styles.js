import styled from "styled-components";
import { Breakpoint } from "../../helpers/mixins";

export const Container = styled.section`
  margin: 0 -5vw var(--m_lg) -5vw;

  @media ${Breakpoint("1200")} {
    margin-right: -10vw;
    margin-left: -10vw;
  }
  @media ${Breakpoint("2000")} {
    margin-right: -20vw;
    margin-left: -20vw;
  }

  /* Slider */
  .flickity-button {
    display: none;
  }
  .flickity-page-dots .dot {
    background-color: var(--d_green);
  }

  @media ${Breakpoint("1000")} {
    .flickity-button {
      display: block;
      background-color: transparent;
      opacity: 0.7;

      svg {
        color: var(--d_gold);
      }
    }
  }
`;
