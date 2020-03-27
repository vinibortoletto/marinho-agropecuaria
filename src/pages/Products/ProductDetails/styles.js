import styled from "styled-components";
import { Breakpoint } from "../../../helpers/mixins";

export const Container = styled.div`
  @media ${Breakpoint("800")} {
    .gallery_and_details_wrapper {
      display: grid;
      grid-template-columns: 25rem 1fr;
      align-items: start;
      gap: var(--m_md);
    }
  }
`;
