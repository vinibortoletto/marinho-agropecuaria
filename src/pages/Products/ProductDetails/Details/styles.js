import styled from 'styled-components';
import { Breakpoint } from '../../../../helpers/mixins';

export const Container = styled.div`
  position: relative;

  table {
    display: none;
    font-size: var(--fz_mini);
    border-collapse: separate;
    margin-top: 0.5rem;

    position: absolute;
    right: 0;
    z-index: 1;
    text-align: left;

    border-bottom: 1px solid var(--d_green_trans);
    border-radius: 1rem 0 1rem 1rem;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);

    th,
    td {
      padding: 1rem;
    }

    td {
      background: var(--l_gold);
      border-bottom: 1px solid var(--d_green_trans);

      &:first-child {
        border-left: 1px solid var(--d_green_trans);
      }
      &:last-child {
        border-right: 1px solid var(--d_green_trans);
      }
    }

    tr:last-child {
      td {
        border-bottom: none;
      }

      td:first-child {
        border-bottom-left-radius: 1rem;
      }
      td:last-child {
        border-bottom-right-radius: 1rem;
      }
    }

    .header {
      color: var(--l_gold);
      font-weight: bold;
      border: 1px solid var(--d_green_trans);
      border-bottom: none;

      th {
        background: var(--d_green);

        &:first-child {
          background: var(--d_green);
          border-top-left-radius: 1rem;
        }

        &:last-child {
          background: var(--d_green);
        }
      }
    }
  }

  table.show {
    display: block;
  }

  @media ${Breakpoint('1100')} {
    .price_and_btn_wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    table {
      left: 0;
      right: initial;
      border-radius: 0 1rem 1rem 1rem;

      .header {
        th {
          &:first-child {
            border-top-left-radius: 0;
          }

          &:last-child {
            border-top-right-radius: 1rem;
          }
        }
      }
    }
  }
`;
