import styled from "styled-components";
import { Breakpoint } from "./helpers/mixins";

export const NavbarWrapper = styled.div`
  height: 4rem;

  @media ${Breakpoint("900")} {
    height: 9rem;
  }

  @media ${Breakpoint("1100")} {
    height: 12rem;
  }
`;
