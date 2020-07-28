import styled from "styled-components";
import { Breakpoint } from "../../../helpers/mixins";

export const Container = styled.div`
  .breadcrumb {
    margin: var(--m_lg) 0;

    font-size: var(--fz_md);
    font-weight: bold;
    font-family: var(--ff_special);

    text-transform: capitalize;
    color: var(--d_gold);

    @media ${Breakpoint("1200")} {
      /* font-size: var(--fz_xhg); */
    }
  }

  @media ${Breakpoint("800")} {
    .gallery_and_details_wrapper {
      display: grid;
      grid-template-columns: 25rem 1fr;
      align-items: start;
      gap: var(--m_md);
    }
  }
`;
