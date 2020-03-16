import styled from "styled-components";
import { Breakpoint } from "../../../helpers/mixins";

export const Container = styled.section`
  height: 4rem;

  @media ${Breakpoint("900")} {
    height: ${props => !props.simple && "9rem"};
  }

  @media ${Breakpoint("1200")} {
    height: ${props => !props.simple && "12rem"};
    height: ${props => props.home && "9rem"};
  }
`;
