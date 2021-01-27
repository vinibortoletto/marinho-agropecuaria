import styled from 'styled-components';
import { Breakpoint } from '../../../helpers/mixins';

export const Container = styled.div`
  .description {
    margin-bottom: 2rem;
    span {
      font-weight: bold;
    }
  }

  .product_info {
    .wrapper {
      display: grid;
      grid-template-columns: 25% 75%;
      justify-items: center;
    }

    border: 1px solid var(--d_gold);
    border-radius: var(--br_sm);
    padding: var(--m_md) var(--m_sm);

    margin-bottom: var(--m_sm);
    &:nth-last-child(1) {
      margin-bottom: 0;
    }

    img {
      width: 4rem;
    }

    .product_content {
      justify-self: left;
    }

    .title {
      font-weight: bold;
      text-transform: capitalize;
    }

    .price,
    .quantity {
      font-size: var(--fz_mini);
    }

    .subtotal {
      text-align: right;
      font-weight: bold;
    }
  }

  .price_summary {
    margin-top: 1rem;
    text-align: right;
    line-height: 1.5;

    .total {
      font-weight: bold;
      font-size: var(--fz_md);
    }
  }
`;
