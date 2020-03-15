import styled from "styled-components";
import { FlexCenter, Size, Breakpoint } from "../../helpers/mixins";

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

  img {
    object-position: 80%;
  }

  .logo {
    ${FlexCenter};
    margin: 20rem 0;

    img {
      width: 100%;
      max-width: 30rem;
    }
  }

  @media ${Breakpoint("1200")} {
    .content {
      margin: 0 -10vw;
    }

    .text {
      width: 30rem;

      position: absolute;
      transform: translateY(-13rem);

      background: var(--d_gold);
      border-radius: var(--br_sm);
      padding: var(--m_md);
      margin-left: var(--sp_md);
    }
  }
  @media ${Breakpoint("2000")} {
    .content {
      margin: 0 -20vw;
    }

    .text {
      padding: var(--m_lg);
    }
  }
`;
