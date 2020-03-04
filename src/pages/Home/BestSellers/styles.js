import styled from "styled-components";
import { Size } from "../../../helpers/mixins";

export const Styles = styled.section`
  .slider_wrapper {
    margin: 0 -5vw var(--m_lg) -5vw;
  }

  .btn_wrapper {
    text-align: right;
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
`;
