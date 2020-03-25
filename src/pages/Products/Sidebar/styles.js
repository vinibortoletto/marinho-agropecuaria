import styled from "styled-components";
import { FlexCenter } from "../../../helpers/mixins";

export const Container = styled.section`
  .categories,
  .prices {
    margin-bottom: var(--m_lg);
  }

  h1 {
    font-weight: bold;
    margin-bottom: var(--m_sm);
  }

  li {
    ${FlexCenter};
    justify-content: flex-start;
    margin-bottom: var(--m_mini);
  }

  span {
    color: grey;
    font-size: var(--fz_mini);
    margin-left: 0.2rem;
  }

  .ranking div {
    display: inline;
  }
`;
