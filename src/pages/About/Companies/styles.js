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
    filter: grayscale(1) sepia(1);
    opacity: 0.7;
  }

  @media ${Breakpoint("1200")} {
    margin-top: 15rem;
  }

  @media ${Breakpoint("2000")} {
    margin-left: var(--sp_md);
    margin-right: var(--sp_md);
  }
`;
