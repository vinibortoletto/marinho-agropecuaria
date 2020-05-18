import styled from "styled-components";
import { FlexCenter, Size } from "../../helpers/mixins";

export const Container = styled.div`
  .backup_card {
    width: 15rem;
    height: 25rem;
    padding: 2rem;

    background: #ffebc9;
    border-radius: var(--br_sm);

    animation: loading 3s ease-in infinite;

    .img,
    .title,
    .stars,
    .price {
      border-radius: var(--br_sm);
      background: #ffd9a0;
    }

    .img {
      ${Size("10rem")};
      margin-bottom: var(--m_md);
    }

    .title {
      height: 2rem;
      margin-bottom: var(--m_sm);
    }

    .stars {
      height: 1rem;
      width: 60%;
    }

    .price {
      height: 3rem;
      width: 75%;
      margin-top: var(--m_mini);
    }
  }

  @keyframes loading {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .product_card {
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
  }
`;
