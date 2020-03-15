import styled from "styled-components";
import { Breakpoint } from "../../helpers/mixins";

export const Styles = styled.section`
  .form_header {
    font-weight: bold;
    font-size: var(--fz_md);
    margin: var(--m_lg) -5vw;
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

  @media ${Breakpoint("1200")} {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }

    section:nth-child(1) {
      order: 2;
    }
  }
`;
