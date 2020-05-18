import styled from "styled-components";
import { Size, Breakpoint, FlexCenter } from "../../../helpers/mixins";

export const Styles = styled.section`
  .slider_wrapper {
    margin: 0 -5vw var(--m_hg) -5vw;
  }

  .btn_container {
    ${FlexCenter};
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

  .product_list {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    gap: var(--m_sm);
    margin-bottom: var(--m_lg);

    a {
      width: 100%;
    }
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
