import styled from "styled-components";

export const Container = styled.div`
  .cep_number {
    h1 {
      margin-bottom: var(--m_sm);
    }

    input {
      width: 8rem;
      padding: var(--m_mini);
      margin-right: var(--m_mini);

      border: 1px solid var(--d_green);
      border-radius: var(--br_sm);
    }

    button {
      display: inline-block;
    }

    a {
      font-size: var(--fz_mini);
      color: var(--l_green);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
