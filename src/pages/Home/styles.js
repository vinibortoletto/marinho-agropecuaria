import styled from "styled-components";
import { Size } from "../../helpers/mixins";

export const Container = styled.div`
  margin: 0 -5vw var(--m_lg) -5vw;

  /* Slider */
  .flickity-button,
  .dot {
    display: none;
  }
`;
