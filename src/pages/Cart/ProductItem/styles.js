import styled from "styled-components";

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
    grid-template-columns: 30% 60% 10%;
    justify-items: center;
  }

  .product_content {
    justify-self: left;
  }

  .counter {
    text-align: center;
    font-size: var(--fz_sm);

    button {
      padding: var(--m_mini);
      color: var(--d_green);
    }
  }

  .title {
    font-weight: bold;
  }

  .price {
    font-size: var(--fz_mini);
    margin-bottom: var(--m_sm);
  }

  .remove_item {
    color: crimson;
    font-size: var(--fz_mini);
    opacity: 0.7;

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
`;
