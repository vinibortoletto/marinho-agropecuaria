import styled from 'styled-components';
import { Breakpoint } from '../../../../helpers/mixins';

export const Container = styled.div`
  .head,
  .body {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }

  .head {
    margin-bottom: var(--m_mini);
  }

  .body {
    border: 1px solid var(--d_gold);
    border-radius: var(--br_sm);
    padding: var(--m_md) var(--m_sm);
  }

  img {
    width: 4rem;
  }

  .amount {
    button {
      border-color: var(--d_green);
      color: var(--d_green);
    }
  }

  .remove_item {
    color: crimson;
    font-size: var(--fz_mini);

    i {
      margin-right: var(--m_mini);
    }
  }

  .title {
    text-transform: capitalize;
  }

  .subtotal {
    font-weight: bold;
  }
`;
