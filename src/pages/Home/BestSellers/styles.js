import styled from "styled-components";
import { Size, Breakpoint } from "../../../helpers/mixins";

export const Styles = styled.section`
  .slider_wrapper {
    margin: 0 -5vw var(--m_hg) -5vw;
  }

  .btn_wrapper {
    text-align: center;
  }
  button {
    ${Size("auto")};
    padding: var(--m_sm);
    font-weight: normal;

    i {
      margin-left: var(--m_sm);
    }
  }

  /* Slider */
  .flickity-button {
    display: none;
  }
  .dot {
    ${Size("7px")};
    background: var(--d_green);
  }

  @media ${Breakpoint("900")} {
    button {
      padding: var(--m_md) var(--m_lg);
    }
  }

  @media ${Breakpoint("1200")} {
    .slider_wrapper {
      margin-right: -10vw;
      margin-left: -10vw;
    }
    @media ${Breakpoint("2000")} {
      .slider_wrapper {
        margin-right: -20vw;
        margin-left: -20vw;
      }
    }
  }
`;
