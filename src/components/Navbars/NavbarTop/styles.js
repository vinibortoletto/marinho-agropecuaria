import styled from "styled-components";
import { Breakpoint } from "../../../helpers/mixins";

export const Container = styled.section`
  height: 4rem;

  @media ${Breakpoint("900")} {
    height: ${props => (props.simple ? "4rem" : "9rem")};
  }
`;
