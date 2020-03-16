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
      color: var(--l_green);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  hr {
    ${Size("100%", "1px")};
    margin: var(--m_lg) 0;
    border: none;
    background-color: var(--d_green);
    opacity: 0.2;
  }
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
