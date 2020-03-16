import styled from "styled-components";
import { Breakpoint } from "../../../helpers/mixins";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  justify-items: center;
  align-items: center;

  img {
    margin: var(--m_md);

    width: 7rem;
    opacity: 0.8;
  }

  @media ${Breakpoint("1200")} {
    margin-top: 20rem;
  }
`;
