import styled from "styled-components";
import { Size, FlexCenter } from "../../../helpers/mixins";

export const Styles = styled.section`
  ${Size("hero")};
  ${FlexCenter};
  flex-direction: column;

  /* Text */
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
      margin-bottom: 3rem;
      opacity: 0.8;
      padding: 0 var(--sp_sm);
    }
  }
`;
