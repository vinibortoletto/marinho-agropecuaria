import styled from "styled-components";
import { FlexCenter } from "../../helpers/mixins";

export const Container = styled.div`
  width: 15rem;
  height: 26rem;

  border: 1px solid var(--d_green_trans);
  border-radius: var(--br_sm);
  padding: 2rem;
  margin: 0 var(--m_mini);

  .img_container {
    ${FlexCenter};
    margin-bottom: var(--m_md);

    img {
      width: 10rem;
    }
  }

  h1 {
    font-size: var(--fz_md);
    margin-bottom: var(--m_sm);
    text-transform: capitalize;
  }

  .price {
    margin-top: var(--m_mini);

    h2 {
      font-weight: bold;
      font-size: var(--fz_lg);
      margin-bottom: var(--m_mini);
    }

    h3 {
      font-size: var(--fz_sm);
    }
  }
`;
