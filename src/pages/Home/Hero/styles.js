import styled from "styled-components";
import { Size, FlexCenter, Breakpoint } from "../../../helpers/mixins";

export const Styles = styled.section`
  width: 100%;
  height: calc(100vh - 4rem);

  ${FlexCenter};
  flex-direction: column;

  button {
    width: 10rem;
  }

  .text {
    color: var(--l_gold);
    text-align: center;

    h1 {
      font-weight: bold;
      font-size: var(--fz_hg);

      font-family: var(--ff_special);
      margin-bottom: 1rem;
    }

    h2 {
      opacity: 0.8;
      padding: 0 var(--sp_sm);
    }
  }

  hr {
    width: 50%;
    max-width: 20rem;
    margin: var(--m_md) 0;
    border-color: var(--l_gold);
    opacity: 0.2;
  }

  @media ${Breakpoint("900")} {
    height: calc(100vh - 9rem);

    .text {
      h1 {
        font-size: var(--fz_xhg);
      }

      h2 {
        font-size: var(--fz_md);
      }
    }
  }
`;
