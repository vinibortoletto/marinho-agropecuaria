import styled from "styled-components";
import { Size, Breakpoint } from "../../helpers/mixins";

export const Container = styled.section`
  .content {
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

  button {
    ${Size("auto")};
    padding: var(--m_sm);
    font-weight: normal;
  }

  i {
    margin-right: var(--m_sm);
  }

  @media ${Breakpoint("900")} {
    .content {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
