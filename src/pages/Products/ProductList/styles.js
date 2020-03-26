import styled from "styled-components";
import { Breakpoint } from "../../../helpers/mixins";

export const Container = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: var(--m_sm);
  justify-items: center;

  .product_card {
    width: 100%;
    transition: 0.2s ease-in-out;
  }

  @media ${Breakpoint("1200")} {
    justify-items: right;
  }
`;
