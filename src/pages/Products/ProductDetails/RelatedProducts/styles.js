import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-size: var(--fz_lg);
  }

  .products_list {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    gap: var(--m_sm);
    justify-items: center;
  }
`;
