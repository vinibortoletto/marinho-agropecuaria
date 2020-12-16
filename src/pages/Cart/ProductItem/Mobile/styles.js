import styled from 'styled-components';
import { Breakpoint } from '../../../../helpers/mixins';

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

  /* .select_container {
    button {
      width: 4rem;
      color: var(--d_green);
      border-color: var(--d_green);
      border-radius: var(--br_sm);
      padding: 0 var(--m_sm);

      i {
        margin-left: var(--m_mini);
      }
    }
  }

  .sort_options {
    width: 4rem;
    transform: translateY(-10%);
  } */

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

  @media ${Breakpoint('1000')} {
    .product_info {
      grid-template-columns: 30% 60% 10%;
    }
  }
`;
