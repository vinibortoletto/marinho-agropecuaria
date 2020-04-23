import styled from "styled-components";
import { Breakpoint } from "../../../helpers/mixins";

export const Container = styled.section`
  .products_list {
    width: 100%;
    margin-bottom: var(--m_lg);

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    gap: var(--m_sm);
    justify-items: center;

    .product_card {
      width: 100%;
      transition: 0.2s ease-in-out;
    }
  }

  .button_container {
    width: 100%;
    text-align: center;
  }

  @media ${Breakpoint("1200")} {
    .products_list {
      justify-items: right;
    }
  }
`;
