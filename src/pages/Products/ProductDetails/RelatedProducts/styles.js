import styled from "styled-components";
import { Breakpoint } from "../../../../helpers/mixins";

export const Container = styled.div`
  .title {
    margin: var(--m_lg) 0;
    font-weight: bold;
    font-size: var(--fz_md);
    color: var(--d_gold);
    font-family: var(--ff_special);

    @media ${Breakpoint("1200")} {
      font-size: var(--fz_lg);
    }
  }

  .products_list {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    gap: var(--m_sm);
    justify-items: center;
  }
`;
