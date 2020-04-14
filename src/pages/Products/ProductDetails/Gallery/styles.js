import styled from "styled-components";
import { Size, FlexCenter, Breakpoint } from "../../../../helpers/mixins";

export const Container = styled.div`
  margin-bottom: var(--m_md);
  ${FlexCenter};
  flex-direction: column;

  img {
    width: 100%;
    max-height: 20rem;
    object-fit: contain;

    padding: var(--m_sm);
    margin-bottom: var(--m_sm);
    border: 1px solid var(--d_green_trans);
    border-radius: var(--br_sm);
  }

  .dots {
    ${FlexCenter};

    .dot {
      ${Size("1.5rem")};
      ${FlexCenter};

      border: 1px solid var(--d_green);
      border-radius: var(--br_circle);

      margin-right: var(--m_sm);
      &:nth-last-child(1) {
        margin-right: none;
      }

      &.selected::after {
        content: "";
        display: block;

        ${Size("1rem")};
        background: var(--d_green);
        border-radius: var(--br_circle);
      }
    }
  }

  @media ${Breakpoint("800")} {
    img {
      max-width: 25rem;
      max-height: 25rem;
    }
  }
`;
