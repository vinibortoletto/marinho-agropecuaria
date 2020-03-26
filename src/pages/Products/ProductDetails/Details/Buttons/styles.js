import styled from "styled-components";
import { FlexCenter } from "../../../../../helpers/mixins";

export const Container = styled.div`
  .amount {
    float: right;
    margin-bottom: var(--m_sm);

    p {
      font-size: var(--fz_mini);
      margin-bottom: var(--m_mini);
    }

    .box {
      width: 5rem;
      padding: var(--m_mini) var(--m_sm);

      ${FlexCenter};
      justify-content: space-between;

      border: 1px solid var(--d_green);
      border-radius: var(--br_sm);
    }
  }

  .add_to_cart button {
    font-size: 1rem;
    width: 100%;
    height: 5rem;
  }
`;
