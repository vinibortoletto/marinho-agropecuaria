import styled from "styled-components";
import { Breakpoint } from "../../../helpers/mixins";

export const Container = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: var(--m_sm);
  justify-items: center;

  .product_card {
    width: 100%;
    transition: 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 0px 5px grey;
    }
  }

  @media ${Breakpoint("1200")} {
    justify-items: right;
  }
`;
