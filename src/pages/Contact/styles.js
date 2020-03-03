import styled from "styled-components";

export const Styles = styled.section`
  .more_help {
    font-weight: bold;
    font-size: var(--fz_md);
    margin: var(--m_lg) -5vw 0 -5vw;
  }

  .social_media {
    margin-top: var(--m_lg);
    text-align: center;

    p {
      font-size: var(--fz_sm);
      margin-bottom: var(--m_sm);
    }

    i {
      font-size: var(--fz_lg);

      &:nth-child(1) {
        margin-right: var(--m_sm);
      }
    }
  }
`;
