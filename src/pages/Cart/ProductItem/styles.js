import styled from 'styled-components';
import { Breakpoint } from '../../../helpers/mixins';

export const Container = styled.div`
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

  .product_info {
    display: grid;
    grid-template-columns: 25% 45% 30%;
    justify-items: center;
  }

  .product_content {
    justify-self: left;
  }

  .title {
    font-weight: bold;
    text-transform: capitalize;
  }

  .price {
    font-size: var(--fz_mini);
    margin-bottom: var(--m_sm);
  }

  .remove_item {
    color: crimson;
    font-size: var(--fz_mini);

    i {
      margin-right: var(--m_mini);
    }
  }

  .subtotal {
    font-weight: bold;
    font-size: var(--fz_md);
    text-align: right;

    span {
      font-weight: normal;
    }
  }

  .quantity {
    align-self: center;

    p {
      margin-bottom: 0.5rem;
      margin-right: 0.5rem;

      display: inline-block;
    }

    div {
      display: inline-block;
    }

    button {
      height: 1.5rem;
      width: 1.5rem;

      color: var(--l_gold);
      background: var(--l_green);
      font-size: 1rem;
      font-weight: bolder;
      border-radius: 0.2rem;
    }

    .amount {
      font-weight: bold;
      padding: 0 0.5rem;
    }
  }

  @media ${Breakpoint('1000')} {
    .product_info {
      grid-template-columns: 30% 50% 20%;
    }
  }
`;
