import styled from "styled-components";

export const Text = styled.section`
  section {
    margin-bottom: var(--m_lg);

    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }

  h2 {
    font-weight: bold;
    font-size: var(--fz_md);
    margin-bottom: var(--m_sm);
  }

  p {
    margin-bottom: var(--m_sm);
  }
`;
