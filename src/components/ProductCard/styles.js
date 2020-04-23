import styled from "styled-components";
import { FlexCenter, Size } from "../../helpers/mixins";

export const Container = styled.div`
  width: 100%;
  height: 25rem;

  background: var(--l_gold);
  border: 1px solid var(--d_green_trans);
  border-radius: var(--br_sm);

  padding: 2rem;
  transition: 0.2s ease-out;
  cursor: pointer;

  &:hover {
    filter: brightness(97%);
  }

  .img_container {
    ${FlexCenter};
    margin-bottom: var(--m_md);

    img {
      ${Size("10rem")};
      object-fit: contain;
    }
  }

  h1 {
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
