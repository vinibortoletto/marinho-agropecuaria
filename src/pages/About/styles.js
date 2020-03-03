import styled from "styled-components";
import { Size } from "../../helpers/mixins";

export const Container = styled.section`
  .wrapper {
    ${Size("hero")};
    margin-bottom: var(--m_md);
  }

  span {
    font-weight: bold;
  }

  p {
    text-align: justify;
    margin-bottom: var(--m_sm);
  }
`;
