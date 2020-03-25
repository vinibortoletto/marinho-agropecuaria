import styled from "styled-components";
import { Breakpoint } from "../../helpers/mixins";

export const Container = styled.section`
  @media ${Breakpoint("1200")} {
    .sidebar_products_wrapper {
      display: grid;
      grid-template-columns: 25% 75%;
    }
  }
`;
