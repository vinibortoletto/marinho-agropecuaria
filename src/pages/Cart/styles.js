import styled from 'styled-components';
import { Breakpoint } from '../../helpers/mixins';

export const Container = styled.div`
  .empty_cart {
    border: 1px solid var(--d_gold);
    border-radius: var(--br_sm);
    padding: var(--m_md) var(--m_sm);
    text-align: center;

    p {
      /* font-weight: bold; */
      margin-bottom: 1rem;
    }

    button {
      font-weight: bold;
      color: var(--l_green);
      font-size: 1.5rem;
    }
  }

  @media ${Breakpoint('1000')} {
    .content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: var(--m_md);
    }

    .product_list {
      order: 1;
    }
    .order_summary_box {
      order: 2;
    }
    .delivery_info_box {
      order: 3;
    }
  }
`;
