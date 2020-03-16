import styled from "styled-components";
import { Size, Breakpoint } from "../../helpers/mixins";

export const Section = styled.section`
  section {
    display: grid;
    justify-items: center;
    grid-gap: var(--m_md);
  }

  img {
    width: 100%;
    max-width: 20rem;
  }

  .text {
    h1 {
      font-weight: bold;
      font-size: var(--fz_md);
      margin-bottom: var(--m_sm);
    }

    span {
      font-weight: bold;
      color: var(--l_green);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  hr {
    margin: var(--m_lg) 0;
  }

  button {
    ${Size("auto")};
    padding: var(--m_sm);
    font-weight: normal;
  }

  i {
    margin-right: var(--m_sm);
  }

  @media ${Breakpoint("900")} {
    section {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
